import chalk from 'chalk'
import { my_name } from 'lib23'

const name = 'rido'
const rido_blue = () => {
    console.log(chalk.blue(my_name))
}

export {name, rido_blue}