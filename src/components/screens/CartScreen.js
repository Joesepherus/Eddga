import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import CustomHeader from '../basic/CustomHeader/CustomHeader'
import CustomCard from '../basic/CustomCard/CustomCard'
import CustomButton from '../basic/CustomButton/CustomButton'
import { Grid } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class CartScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {}
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

  sendOrder = () => {
    const { store } = this.props

    store.sendOrder()
  }

  componentDidMount() {
    this.props.store.setActiveHeader('cart')
  }

  render() {
    const { store, match } = this.props

    return (
      <div className="userDetail">
        <CustomHeader type="h1">Košík</CustomHeader>
        {store.cart.length > 0 &&
          store.cart.map((product, index) => {
            return (
              <Grid.Column key={index}>
                <Link to={'/product-detail/' + product.id}>
                  <CustomCard data={product} />
                </Link>
              </Grid.Column>
            )
          })}
        <CustomButton
          className="btn btn-primary"
          color="blue"
          onClick={this.sendOrder}
        >
          Dokončiť objednávku
        </CustomButton>
      </div>
    )
  }
}

export default inject('store')(observer(CartScreen))
