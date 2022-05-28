import { factorialize } from "./factorialize.js";

 describe('factorialize function tests',()=>{
     test('0! = 1',()=>{
         expect(factorialize(0).toBe(1))
     })
 })