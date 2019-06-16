import React, { Component } from 'react'
import CustomHeader from '../basic/CustomHeader/CustomHeader'
import ContainerPaddingUI from '../containers/ContainerPaddingUI/ContainerPaddingUI'
import CustomForm from '../complex/CustomForm/CustomForm'
import CustomButton from '../basic/CustomButton/CustomButton'
import { observer, inject } from 'mobx-react'

class AdminAddProduct extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      price: '',
      description: '',
      photo: ''
    }
    this.formData = [
      {
        type: 'input',
        name: 'name',
        placeholder: 'meno',
        value: this.state.name,
        label: 'Meno'
      },
      {
        type: 'input',
        name: 'price',
        placeholder: 'cena',
        value: this.state.price,
        label: 'Cena'
      },
      {
        type: 'input',
        name: 'description',
        placeholder: 'popis',
        value: this.state.description,
        label: 'Popis'
      },
      {
        type: 'input',
        name: 'photo',
        placeholder: 'url fotky',
        value: this.state.photo,
        label: 'Fotka'
      }
    ]
  }

  onChange = (value, name) => {
    this.setState({
      [name]: value
    })
  }

  addProduct = () => {
    const { store } = this.props
    const { name, price, description, photo } = this.state

    let newProduct = {
      id: store.products.length,
      name: name,
      price: price,
      description: description,
      gallery: [photo]
    }
    store.addProduct(newProduct)
  }

  render() {
    return (
      <div>
        <ContainerPaddingUI className="addUser">
          <CustomHeader type="h1">Pridávanie nového produktu</CustomHeader>
          <CustomForm
            type="addUser"
            data={this.formData}
            onChange={this.onChange}
          />
          <CustomButton onClick={this.addProduct} color="blue">
            Vytvoriť
          </CustomButton>
        </ContainerPaddingUI>
      </div>
    )
  }
}

export default inject('store')(observer(AdminAddProduct))
