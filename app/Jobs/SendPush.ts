import { apiAxios } from 'Config/app'
import type { JobHandlerContract, Job } from '@ioc:Rlanz/Queue'
import { AxiosError } from 'axios';

export type SendPushPayload = {}

export default class implements JobHandlerContract {
    constructor(public job: Job) {
        this.job = job
    }

    /** 
     * Base Entry point
@ioc:Rlanz/Queuepublic async handle (payload: SendPushPayload) {
    try {
        console.log(payload)
        await apiAxios.post( 
            'https://exp.host/-/api/v2/push/send', 
            payload
        );
            console.log('foi')
        } catch (error) {
            const err = error as AxiosError
            console.log(err.response?.data)
    }
}

/**
* This is an optional method that gets called if it exists wh
*/
public async failed() { }
}