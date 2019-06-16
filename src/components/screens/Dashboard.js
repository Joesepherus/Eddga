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
import CustomInput from '../basic/CustomInput/CustomInput'
import CustomSelect from '../basic/CustomSelect/CustomSelect'

let selectOptions = [
  {
    key: 'ziadne',
    text: 'ziadne',
    value: 'none'
  },
  {
    key: 'min',
    text: 'min',
    value: 'min'
  },
  {
    key: 'max',
    text: 'max',
    value: 'max'
  }
]

class Dashboard extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  componentDidUpdate(prevProps, prevState) {}

  componentDidMount() {
    this.props.store.setActiveHeader('dashboard')
  }

  search = data => {
    this.setState({
      search: data
    })

    this.props.store.search(data)
  }

  filter = (e, data) => {
    this.props.store.filter(data.value)
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
          <div>
            <CustomInput
              placeholder="search"
              value={this.state.search}
              name="Search"
              onChange={this.search}
              className="registerInput"
            />
            <CustomSelect
              selectOptions={selectOptions}
              onChange={this.filter}
            />
          </div>
          {store.productsShow.length > 0 &&
            store.productsShow.map((product, index) => {
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
      </div>
    )
  }
}

export default inject('store')(observer(Dashboard))
