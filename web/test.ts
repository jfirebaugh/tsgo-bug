import ClientA from 'livegraph/ts/src/client/client'
import { Client as ClientB } from 'livegraph/ts/client'

function fn(client: ClientA): ClientB {
  return client
}
