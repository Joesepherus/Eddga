import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import CustomHeader from '../basic/CustomHeader/CustomHeader'
import CustomButton from '../basic/CustomButton/CustomButton'

class UserDetailScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      modalStatus: false,
      loaded: false,
      formData: [
        {
          type: 'input',
          name: 'email',
          placeholder: 'email',
          label: 'Email'
        },
        {
          type: 'input',
          name: 'name',
          placeholder: 'meno',
          label: 'Meno'
        }
      ]
    }
  }

  componentDidMount() {
    this.props.store.setActiveHeader('dashboard')
  }

  onChange = (value, name) => {
    this.setState({
      [name]: value
    })
  }

  toggleModal = () => {
    this.setState({
      modalStatus: !this.state.modalStatus
    })
  }

  addToCart = () => {
    const { store, match } = this.props

    store.addToCart(match.params.productId)
  }

  render() {
    const { store, match } = this.props

    return (
      <div className="userDetail">
        <CustomHeader type="h1">Detail produktu</CustomHeader>
        <div className="card-body">
          <h5 className="card-title">
            {store.products[match.params.productId].name}
          </h5>
          <img
            src={store.products[match.params.productId].gallery[0]}
            style={{ width: 200 }}
            className="card-img-top card-img"
            alt="data_photo"
          />
          <p className="card-text">
            {store.products[match.params.productId].price}
          </p>
          <p className="card-text">
            {store.products[match.params.productId].description}
          </p>
          <CustomButton
            className="btn btn-primary"
            color="blue"
            onClick={this.addToCart}
          >
            Pridať do košíka
          </CustomButton>
        </div>
      </div>
    )
  }
}

export default inject('store')(observer(UserDetailScreen))
