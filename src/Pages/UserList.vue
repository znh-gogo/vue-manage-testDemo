<template>
    <div class="users">
      用户名：<a-input-search
        placeholder="input search text"
        v-model="values"
        @search="onSearch"
        enterButton
        style="width: 200px;"
      />
      <a-table :columns="columns" :dataSource="data" :scroll="{ x: 1300 }" :rowKey="data.forEach(item=>{return item.id})" :rowSelection="rowSelection" @change="check" :pagination="pagination" >
        <div slot="delete" slot-scope="text">
          <a-popconfirm title="Are you sure delete this task?" @confirm="confirm(text)" @cancel="cancel" okText="Yes" cancelText="No">
            <a  href="javascript:;">delete</a>
          </a-popconfirm>
        </div>
      </a-table>
<!--      <a-pagination showSizeChanger :pageSize.sync="pageSize" @showSizeChange="onShowSizeChange" :total="this.data.length" v-model="current"/>-->
    </div>
</template>

<script>
  import axios from 'axios'
  const columns = [
    { title: 'cname',  dataIndex: 'cname',key: 'cname' },
    { title: 'title', dataIndex: 'title',key: 'title' },
    { title: 'city', dataIndex: 'city',key: 'city' },
    { title: 'email', dataIndex: 'email',key: 'email' },
    {
      title: 'delete',
      key: 'operation',
      fixed: 'right',
      width: 100,
      scopedSlots: { customRender: 'delete' },
    },
  ];

  const data = [{
    cname: 'John Brown',
    title: 32,
    city: 'New York Park',
    email: 'New York Park',
  }];

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    onSelect: (record, selected, selectedRows) => {
      console.log(record, selected, selectedRows);
    },
    onSelectAll: (selected, selectedRows, changeRows) => {
      console.log(selected, selectedRows, changeRows);
    },
  };
  export default {
    name: 'UserList',
    data() {
      return {
        data,
        columns,
        searchList:[],
        values:'',
        rowSelection,
        pageSize: 10,
        current:1,
        pagination:{
          defaultPageSize:10,
          showTotal: total => `共 ${total} 条数据`,
          showSizeChanger:true,
          pageSizeOptions: ['5', '10', '15', '20'],
          onShowSizeChange:(current, pageSize)=>this.pageSize = pageSize
        }
      }
    },
    methods:{
      getList(){
        axios.post('https://www.easy-mock.com/mock/5d23f434da2af57967361f80/doDemo/getList').then((res)=>{
          // console.log(res.data.data.array)
          this.data=res.data.data.array
        })
      },

      check(pagination, filters, sorter){
        console.log(pagination)
      },
      onSearch(e){
        this.searchList=[]
        this.data.forEach(item=>{
        if (e===""){
          return
        }
          if (item.cname.indexOf(e)!==-1){
            // console.log("有此人")
            this.searchList.push(item)
            this.data=this.searchList
          }
        })
      },
      confirm (text) {
        console.log(text)
        this.$message.success('Click on Yes')
      },
      cancel (e) {
        // console.log(e)
        this.$message.error('Click on No')
      },
    },
    watch:{
      values(e){
        if (e===''){
          this.getList()
        }
      },

    },
    mounted () {
      this.getList()
    }
  }
</script>

<style scoped>

</style>
