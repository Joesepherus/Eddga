import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import CustomHeader from '../basic/CustomHeader/CustomHeader'
import { Grid } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class OrdersByUserScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    this.props.store.setActiveHeader('dashboard')
  }

  render() {
    const { store } = this.props

    return (
      <div className="userDetail">
        <CustomHeader type="h1">Vaše objednávky</CustomHeader>

        {store.orders.length > 0 &&
          store.orders.map((order, index) => {
            return (
              <Grid.Column key={index}>
                <Link to={'/order-detail/' + order.id}>
                  <h5>Objednávka ID: {order.id}</h5>
                  <p>Čas objednávky: {order.time}</p>
                  <p>Produkty</p>
                  {/* <CustomTable head={head} body={order} /> */}
                  {order.items.length > 0 &&
                    order.items.map((item, index) => {
                      return (
                        <div className="card-body">
                          <h5 className="card-title">
                            Názov produktu:{' '}
                            {store.products[item.product_id].name}
                          </h5>
                          <p>Cena produktu: {item.price}</p>
                          <p>Počet: {item.count}</p>
                        </div>
                      )
                    })}
                </Link>
              </Grid.Column>
            )
          })}
      </div>
    )
  }
}

export default inject('store')(observer(OrdersByUserScreen))
