<template>
    <div class="edit">
      <a-table :columns="columns" :dataSource="data" bordered :pagination="pagination">
        <template v-for="(col) in ['cname', 'email', 'city']" :slot="col"  slot-scope="text, record, index">
          <div :key="col">
            <a-input
              v-if="record.editable"
              style="margin: -5px 0"
              :value="text"
              @change="e => handleChange(e.target.value, record, col)"
            />
            <template v-else>{{text}}</template>
          </div>
        </template>
        <template slot="operation" slot-scope="text, record, index">
          <div class='editable-row-operations'>
        <span v-if="record.editable">
          <a @click="() => save(record.key)">Save</a>
          <a-popconfirm title='Sure to cancel?' @  ="() => cancel(record.key)">
            <a>Cancel</a>
          </a-popconfirm>
        </span>
            <span v-else>
          <a @click="() => edit(record.key)">Edit</a>
          <a @click="() => delete(record.key)">delete</a>
        </span>
          </div>
        </template>
      </a-table>
    </div>
</template>

<script>
  const columns = [{
    title: 'cname',
    dataIndex: 'cname',
    width: '25%',
    scopedSlots: { customRender: 'cname' },
  }, {
    title: 'email',
    dataIndex: 'email',
    width: '15%',
    scopedSlots: { customRender: 'email' },
  }, {
    title: 'address',
    dataIndex: 'city',
    width: '40%',
    scopedSlots: { customRender: 'city' },
  }, {
    title: 'operation',
    dataIndex: 'operation',
    scopedSlots: { customRender: 'operation' },
  }]

  const data = []
  // for (let i = 0; i < 100; i++) {
  //   data.push({
  //     key: i.toString(),
  //     name: `Edrward ${i}`,
  //     age: 32,
  //     address: `London Park no. ${i}`,
  //   })
  // }
  import axios from 'axios'
  export default {
    data () {
      this.cacheData = data.map(item => ({ ...item }))
      return {
        data,
        columns,
        pagination:{
          defaultPageSize:10,
          showTotal: total => `共 ${total} 条数据`,
          showSizeChanger:true,
          pageSizeOptions: ['5', '10', '15', '20'],
          onShowSizeChange:(current, pageSize)=>this.pageSize = pageSize
        }
      }
    },
    methods: {
      handleChange (value, key, column) {
        console.log(value, key, column)
        const newData = [...this.data]

        const target = newData.filter(item => key === item.key)[0]

        if (target) {
          target[column] = value
          this.data = newData
        }
      },
      edit (key) {

        const newData = [...this.data]
        const target = newData.filter(item => key === item.key)[0]
        if (target) {
          target.editable = true
          this.data = newData
        }
      },
      save (key) {
        const newData = [...this.data]
        const target = newData.filter(item => key === item.key)[0]
        if (target) {
          delete target.editable
          this.data = newData
          this.cacheData = newData.map(item => ({ ...item }))
        }
      },
      cancel (key) {
        const newData = [...this.data]
        const target = newData.filter(item => key === item.key)[0]
        if (target) {
          Object.assign(target, this.cacheData.filter(item => key === item.key)[0])
          delete target.editable
          this.data = newData
        }
      },
      getList(){
        axios.post('https://www.easy-mock.com/mock/5d23f434da2af57967361f80/doDemo/getList').then((res)=>{
          console.log(res.data.data.array)
          this.data=res.data.data.array
        })
      }
    },
    mounted () {
      this.getList()
    }
  }
</script>
<style scoped>
  .editable-row-operations a {
    margin-right: 8px;
  }
</style>
