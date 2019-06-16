import React, { Component } from 'react'
import CustomNavbar from '../../basic/CustomNavbar/CustomNavbar'
import Dashboard from '../../screens/Dashboard'
import ErrorScreen from '../../screens/ErrorScreen'
import { Route, Switch } from 'react-router-dom'
import { setLoginStatus, redirect, showToast } from '../../../global/global'
import { observer, inject } from 'mobx-react'
import history from '../../../history'
import ProductDetailScreen from '../../screens/ProductDetailScreen'
import CartScreen from '../../screens/CartScreen'
import OrdersByUserScreen from '../../screens/OrdersByUserScreen'
import AdminProducts from '../../screens/AdminProducts'
import AdminOrders from '../../screens/AdminOrders'
import AdminAddProduct from '../../screens/AdminAddProduct'

class ScreensContainer extends Component {
  logout = () => {
    setLoginStatus(false)
    redirect('/login', history)
    showToast('Odhlásenie prebehlo úspešne.', 'info')
  }

  render() {
    return (
      <div>
        <CustomNavbar logout={this.logout} />
        <Switch>
          {/* {this.store} */}
          <Route exact path="/" component={Dashboard} />
          <Route path="/dashboard" component={Dashboard} />
          <Route
            path="/product-detail/:productId"
            component={ProductDetailScreen}
          />
          <Route path="/cart" component={CartScreen} />
          <Route path="/user-orders" component={OrdersByUserScreen} />
          <Route path="/admin/products" component={AdminProducts} />
          <Route path="/admin/orders" component={AdminOrders} />
          <Route path="/admin/product/add" component={AdminAddProduct} />
          <Route path="*" component={ErrorScreen} />
        </Switch>
      </div>
    )
  }
}

export default inject('store')(observer(ScreensContainer))
