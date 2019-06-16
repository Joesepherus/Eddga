import React, { Component } from 'react'
import '../../App.css'
import CustomCard from '../basic/CustomCard/CustomCard.js'
import ContainerPaddingUI from '../containers/ContainerPaddingUI/ContainerPaddingUI'
import { Grid } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { observer, inject } from 'mobx-react'
import { redirect } from '../../global/global'
import CustomFAB from '../basic/CustomFAB/CustomFAB'
import { mdiPlus } from '@mdi/js'
import CustomButton from '../basic/CustomButton/CustomButton'

class AdminProducts extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  componentDidUpdate(prevProps, prevState) {}

  componentDidMount() {
    this.props.store.setActiveHeader('dashboard')
  }

  render() {
    const { store } = this.props
    return (
      <div>
        <ContainerPaddingUI>
          <div className="jumbotron" style={{ width: '100%' }}>
            <h1 className="display-4">Monitorovanie používateľov</h1>
            <p className="lead">
              Appka na monitorovanie používateľov kolobežiek v reálnom čase.
            </p>
            <hr className="my-4" />
            <h2>Vitaj {this.props.store.admin.name}!</h2>
            <p>Pod týmto textom sú zobrazený všetci vaši používateľia.</p>
            <CustomButton
              color="blue"
              onClick={() => redirect('/about-app', this.props.history)}
            >
              Viacej o appke
            </CustomButton>
          </div>
          {store.products.length > 0 &&
            store.products.map((product, index) => {
              return (
                <Grid.Column key={index}>
                  <Link to={'/product-detail/' + product.id}>
                    <CustomCard data={product} />
                  </Link>
                </Grid.Column>
              )
            })}
          <p>{this.state.timestamp}</p>
        </ContainerPaddingUI>
        <CustomFAB
          icon={mdiPlus}
          onClick={() => {
            redirect('/admin/product/add', this.props.history)
          }}
        />
      </div>
    )
  }
}

export default inject('store')(observer(AdminProducts))
