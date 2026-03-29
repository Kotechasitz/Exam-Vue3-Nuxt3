<template>
  <div>
    <h1>Result Group By</h1>
    <pre>{{ resultGroupBy }}</pre>

    <hr>

    <h1>Result Remove Duplicate</h1>
    <pre>{{ resultDeDuplicate }}</pre>
  </div>
</template>

<script lang="ts">
import { mockDataGroupBy, mockDataDeDuplicate } from '../data/mockDataGroupBy'
import type { Product, User } from '../data/mockDataGroupBy'
import { ref } from 'vue'

export default {
  setup() {
    const itemGroupBy = mockDataGroupBy as Product[]
    const resultGroupBy = ref<Product[]>([])
    const itemDeDuplicate = mockDataDeDuplicate as User[]
    const resultDeDuplicate = ref<User[]>([])

    return {
      itemGroupBy,
      resultGroupBy,
      itemDeDuplicate,
      resultDeDuplicate
    }
  },

  computed: {
    totalItems(): number {
      return this.resultGroupBy.length
    }
  },

  watch: {
    resultGroupBy(newVal: Product[], oldVal: Product[]) {
      console.log('Result changed:', newVal, oldVal)
    }
  },

  mounted() {
    this.resultGroupBy = this.filterBy(this.itemGroupBy, 'type', 'electronics')
    console.log('eiei: ' + JSON.stringify(this.resultGroupBy))
    this.resultDeDuplicate = this.removeDuplicates(this.itemDeDuplicate)
    console.log('eiei2: ' + JSON.stringify(this.resultGroupBy))
  },

  methods: {
    filterBy(array: Product[], key: keyof Product, value: string): Product[] {
      return array.filter(item => String(item[key]) === value)
    },
    removeDuplicates(users: User[]): User[] {
      const seen: Record<string, boolean> = {}

      const normalizeEmail = (email: string) => email.toLowerCase()

      const normalizePhone = (phone: string) =>
        phone.replace(/\D/g, '').replace('66', '0')

      const normalizeName = (first: string, last: string) =>
        `${first.trim().toLowerCase()} ${last.trim().toLowerCase()}`

      const result: User[] = []

      for (const user of users) {
        const emailKey = `email:${normalizeEmail(user.email)}`
        const namePhoneKey = `namephone:${normalizeName(user.firstName, user.lastName)}-${normalizePhone(user.phone)}`

        if (seen[emailKey] || seen[namePhoneKey]) {
          console.log('duppp: ' + emailKey + ' | ' + namePhoneKey)
          console.log('=====')
          continue
        }

        seen[emailKey] = true
        seen[namePhoneKey] = true

        result.push(user)
      }

      return result
    }
  }
}
</script>
