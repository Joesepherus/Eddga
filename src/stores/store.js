import { decorate, observable, action } from 'mobx'
import {
  server_api,
  showToast,
  setLoginStatus,
  redirect
} from '../global/global'
import axios from 'axios'

class store {
  // ===== LOGGED IN =====
  loggedIn = false
  admin = { users: [] }
  user = {}
  activeHeader = ''
  cart = []

  products = [
    {
      id: 0,
      name: 'Kapsička Felix Party Mix Original Mix 60g',
      description: 'big round',
      price: 99,
      gallery: [
        'https://www.petcenter.sk/media/catalog/product/cache/4/image/700x700/9df78eab33525d08d6e5fb8d27136e95/3/3/330563-kap.fe_party_mix_original_mix_60g.jpg'
      ],
      order_id: 1233
    },
    {
      id: 1,
      name: 'Mlsoun drops pre hlodavce pomarančový 75g',
      description: 'Pre hlodavce',
      price: 88,
      gallery: [
        'https://www.petcenter.sk/media/catalog/product/cache/4/image/700x700/9df78eab33525d08d6e5fb8d27136e95/3/0/301349.jpg'
      ],
      order_id: 86548952
    }
  ]

  productsShow = this.products

  orders = [
    {
      id: 0,
      total_price: 123,
      items: [
        {
          product_id: 0,
          price: 12,
          count: 1
        },
        {
          product_id: 1,
          price: 41,
          count: 2
        }
      ],
      time: '25.1.2019 20:23'
    }
  ]

  setActiveHeader(header) {
    this.activeHeader = header
  }

  setLoggedIn(status) {
    this.loggedIn = status
  }

  // ===== USER ======

  async login(email, password) {
    let res = await axios
      .post(server_api + '/api/admin/login', {
        admin: {
          email: email,
          password: password
        }
      })
      .then(response => {
        if (response.data.status === 200) {
          setLoginStatus(true, response.data.admin_id)
          showToast(response.data.message, 'info')
          this.admin = response.data.admin
          return response
        } else {
          showToast(response.data.message, 'error')
          return null
        }
      })
      .catch(function(error) {
        // showToast(error.data.message)
      })
    return res
  }

  register(admin, history) {
    axios
      .post(server_api + '/api/admin', {
        admin
      })
      .then(response => {
        if (response.data.status === 200) {
          showToast(response.data.message, 'info')
          redirect('/login', history)
        } else {
          showToast(response.data.message, 'error')
        }
      })
      .catch(function(error) {})
  }

  // ===== PRODUCT =====

  getProducts() {
    axios
      .get(server_api + '/api/product/')
      .then(response => {
        this.products = response.data
      })
      .catch(function(error) {})
  }

  getProductsPaging(pageNum) {
    axios
      .get(server_api + '/api/product/' + pageNum)
      .then(response => {
        this.products = response.data
      })
      .catch(function(error) {})
  }

  getProductsFiltered(min, max, text) {
    axios
      .get(server_api + '/api/product/' + min + '/' + max + '/' + text)
      .then(response => {
        this.products = response.data
      })
      .catch(function(error) {})
  }

  getProduct(productId) {
    axios
      .get(server_api + '/api/product/' + productId)
      .then(response => {
        this.product = response.data
      })
      .catch(function(error) {})
  }

  addProduct(product, history) {
    // if (user.email === '')
    //   showToast('Zadajte email nového používateľa kolobežky.', 'error')
    // if (user.name === '')
    //   showToast('Zadaje meno nového používateľa kolobežky.', 'error')
    axios
      .post(server_api + '/api/addProduct', {
        product
      })
      .then(response => {
        if (response.data.status === 200) {
          showToast(response.data.message, 'info')
          this.getProducts()
          redirect('/', history)
        } else {
          showToast(response.data.message, 'error')
        }
      })
      .catch(function(error) {
        // showToast(error.data.message)
      })
  }

  // ===== ORDER =====

  getOrders() {
    axios
      .get(server_api + '/api/orders/')
      .then(response => {
        this.orders = response.data
      })
      .catch(function(error) {})
  }

  getOrdersPaging(pageNum) {
    axios
      .get(server_api + '/api/orders/' + pageNum)
      .then(response => {
        this.orders = response.data
      })
      .catch(function(error) {})
  }

  addOrder(product, history) {
    // if (user.email === '')
    //   showToast('Zadajte email nového používateľa kolobežky.', 'error')
    // if (user.name === '')
    //   showToast('Zadaje meno nového používateľa kolobežky.', 'error')
    axios
      .post(server_api + '/api/addOrder', {
        product
      })
      .then(response => {
        if (response.data.status === 200) {
          showToast(response.data.message, 'info')
          this.getOrders()
          redirect('/', history)
        } else {
          showToast(response.data.message, 'error')
        }
      })
      .catch(function(error) {
        // showToast(error.data.message)
      })
  }

  addToCart(id) {
    this.cart.push(this.products[id])
  }

  sendOrder() {
    let total_price = 0
    let items = []
    this.cart.map(item => {
      total_price += item.price
      items.push({ product_id: item.id, price: item.price, count: 1 })
    })
    let newOrder = {
      id: this.orders.length,
      time: Date.now(),
      total_price: total_price,
      items: items
    }
    this.orders.push(newOrder)
    this.cart = []
  }

  addProduct(product) {
    this.products.push(product)
  }

  search(data) {
    this.productsShow = []
    let filter = data.toUpperCase()
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].name.toUpperCase().indexOf(filter) > -1) {
        this.productsShow.push(this.products[i])
      }
    }
  }

  filter(data) {
    console.log(data)
    if (data === 'min')
      this.productsShow = this.productsShow.sort(function(a, b) {
        return a.price - b.price
      })
    else if (data === 'max')
      this.productsShow = this.productsShow.sort(function(a, b) {
        return b.price - a.price
      })
    else this.productsShow = this.products
  }
}

decorate(store, {
  loggedIn: observable,
  admin: observable,
  user: observable,
  activeHeader: observable,
  cart: observable,
  productsShow: observable,
  setLoggedIn: action,
  getAdmin: action,
  getUser: action,
  updateUser: action,
  deleteUser: action,
  updateAdmin: action,
  deleteAdmin: action,
  setActiveHeader: action,
  addToCart: action,
  sendOrder: action,
  search: action
})

export default new store()
