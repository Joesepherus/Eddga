import React, { Component } from 'react'
import './CustomCard.scss'
import CustomButton from '../CustomButton/CustomButton'

export default class CustomCard extends Component {
  render() {
    const { data } = this.props
    console.log(data)
    return (
      <div
        className={this.props.className + ' card'}
        style={{ width: '18rem' }}
      >
        <img
          src={data.gallery[0]}
          className="card-img-top card-img"
          alt="data_photo"
        />
        <div className="card-body">
          <h5 className="card-title">{data.name}</h5>
          {/* <h5 className="card-title">{data.email}</h5> */}
          {/* <p className="card-text">{data.description}</p> */}
          <CustomButton className="btn btn-primary" color="blue">
            Viacej o produkte
          </CustomButton>
        </div>
      </div>
    )
  }
}
