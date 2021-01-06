import * as core from '@actions/core'
import {wait} from './wait'

async function run(): Promise<void> {
  try {
    const url: string = core.getInput('url')
    core.debug(`hello dynatrace`) 
    console.log(`Hello Dynatrace`)
    

    
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
