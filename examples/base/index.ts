import { Force } from '../../src'
import data from './data'
const instance = new Force(document.querySelector('#container') as HTMLElement)
instance.data(data)
