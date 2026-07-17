import { type SchemaTypeDefinition } from 'sanity'
import  blog  from './blog' 
import { banner } from './banner'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blog, banner],
}
