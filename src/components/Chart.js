import React, { Component } from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader
} from '@coreui/react'
import { CChartLine } from '@coreui/react-chartjs'
import io from 'socket.io-client'

const socket = io('localhost:3003')

class Charts extends Component {

    constructor(props) {
        super(props)
        this.state = {
          data : 0,
          a : 0,
          b : 0,
          c : 0,
          d : 0
        }
    }
      componentDidMount () {
        socket.on('data', data => {
          this.setState({
            data : data
          })
          console.log(this.state)
          console.log('data', data)
          this.state.a = this.state.data
          this.state.b = this.state.a
          this.state.c = this.state.b
          this.state.d = this.state.c
          if ( data !== null) {
            socket.emit('message', { message: 'sent'})
          }
        })
    }

    render () {
        return (
            <CCard>
                <CCardHeader>
                Line Chart
                </CCardHeader>
                <CCardBody>
                <CChartLine
                    datasets={[
                    {
                        label: 'Data One',
                        backgroundColor: 'rgb(228,102,81,0.9)',
                        data: [this.state.a, , this.state.b, this.state.c, this.state.d, this.state.data]
                    }
                    // {
                    //     label: 'Data Two',
                    //     backgroundColor: 'rgb(0,216,255,0.9)',
                    //     data: [39, 80, 40, 35, 40, 20, 45]
                    // }
                    ]}
                    options={{
                    tooltips: {
                        enabled: true
                    }
                    }}
                    labels="months"
                />
                </CCardBody>
            </CCard>
        )
    }
}


export default Charts