<template>
  <div>
    <button @click="toggleSort">
      Sort: {{ isAscending ? 'ASC' : 'DESC' }}
    </button>

    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Age</th>
          <th>Role</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="user in sortedUsers" :key="user.id">
          <td>{{ user.id }}</td>
          <td>{{ user.name }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.age }}</td>
          <td>{{ user.role }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export interface User {
  id: number
  name: string
  email: string
  age: number
  role: string
}

export default defineComponent({
  props: {
    users: {
      type: Array as () => User[],
      required: true
    }
  },

  data() {
    return {
      isAscending: true as boolean
    }
  },

  computed: {
    sortedUsers(): User[] {
      const usersCopy = [...this.users]

      return usersCopy.sort((a, b) => {
        return this.isAscending
          ? a.age - b.age
          : b.age - a.age
      })
    }
  },

  methods: {
    toggleSort() {
      this.isAscending = !this.isAscending
    }
  }
})
</script>

<style scoped>
/* Container */
.container {
  max-width: 900px;
  margin: auto;
  font-family: Arial, sans-serif;
}

/* Button */
button {
  padding: 8px 14px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  background-color: #4f46e5;
  color: white;
  transition: 0.2s;
}

button:hover {
  background-color: #4338ca;
}

button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

/* Table */
table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
  background: white;
  border-radius: 8px;
  overflow: hidden;
  color: black;
}

/* Header */
thead {
  background-color: #f3f4f6;
}

th {
  text-align: left;
  padding: 12px;
  font-weight: 600;
  font-size: 14px;
}

/* Body */
td {
  padding: 10px 12px;
  font-size: 14px;
}

/* Row hover */
tbody tr:hover {
  background-color: #f9fafb;
}

/* Zebra stripe */
tbody tr:nth-child(even) {
  background-color: #fafafa;
}

/* Responsive */
@media (max-width: 600px) {
  table {
    font-size: 12px;
  }

  th, td {
    padding: 8px;
  }
}
</style>
