import Queue from 'bull'
import redisConfig from '@config/redisConfig'


const queues = [
  {
    bull: Queue('someQueueName'),
    name: 'Teste',
    handle: () => { },
    options: {},
    key: 'Teste'

  }
]
export default {
  queues,
  add(name: string, data: any): Promise<Queue.Job<any>> | undefined {
    const queue = this.queues.find(q => q.name === name);
    return queue?.bull.add(data, queue.options);
  },
  process(): void {
    return this.queues.forEach(queue => {
      queue.bull.process(queue.handle);
      queue.bull.on('failed', (job, err) => {
        console.log("Job failed", queue.key, job.data);
      })
    })
  }

}