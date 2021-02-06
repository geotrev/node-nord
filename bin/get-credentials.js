#!/usr/bin/env node
import fs from "fs"

const credString = fs.readFileSync(".auth", "utf8")

console.log(credString.trim().split("\n"))

export { credString as credentials }
