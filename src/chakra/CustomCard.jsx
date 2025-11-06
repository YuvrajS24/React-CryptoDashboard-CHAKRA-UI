"use client"

import { createSystem, defaultConfig, defineConfig, chakra } from "@chakra-ui/react"

const config = defineConfig({})

const system = createSystem(defaultConfig, config)

const card = system.cva({
  base: {
    bg: "white",
    borderRadius: "xl",
    p: "6",
  },
})

export const CustomCard = chakra("div", card)
