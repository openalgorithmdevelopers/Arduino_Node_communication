import { SerialPort } from 'serialport'
import { ReadlineParser } from 'serialport'
// const { SerialPort, ReadlineParser } = require('serialport')


const serialport = new SerialPort({ path: '/dev/ttyUSB0', baudRate: 9600 })

const parser = new ReadlineParser()
serialport.pipe(parser)
parser.on('data', console.log)