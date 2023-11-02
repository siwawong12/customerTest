<template>
  <div class="wrapper ms-5 mt-3">
    <div class="row">
      <div class="form-group col-4">
        <label>รหัสลูกค้า :</label>
        <input class="form-control" type="text" v-model="custid"/>
      </div>
      <div class="form-group col-4">
        <label>ชื่อลูกค้า :</label>
        <input class="form-control" type="text" v-model="custname"/>
      </div>
    </div>

    <div class="row">
      <div class="form-group col-8">
        <label >ที่อยู่ลูกค้า :</label>
        <textarea v-model="custadd" id="floatingTextarea" class="form-control" type="text" style="height: 100px;"></textarea>
      </div>
    </div>

    <div class="row">
      <div class="form-group col-4">
        <label>รหัสไปรษณีย์ :</label>
        <input v-model="custpost" class="form-control" type="text" />
      </div>
      <div class="form-group col-4">
        <label>เบอร์โทรศัพท์ :</label>
        <input v-model="custphone" class="form-control" type="text" />
      </div>
    </div>

    <div class="row">
      <div class="form-group col-4">
        <label>หมายเลขแฟกซ์ :</label>
        <input v-model="custfax" class="form-control" type="text" />
      </div>
      <div class="form-group col-4">
        <label>อีเมล :</label>
        <input v-model="custemail" class="form-control" type="text" />
      </div>
    </div>

    <div class="row">
      <button @click="createCust()" class="btn btn-primary text-center fw-bold text-uppercase col-8 mt-3">submit</button>
    </div>
    <table class="table mt-3 text-center">
      <thead>
        <tr>
          <th scope="col">รหัสลูกค้า</th>
          <th scope="col">ชื่อลูกค้า</th>
          <th scope="col">ที่อยู่ลูกค้า</th>
          <th scope="col">รหัสไปรษณีย์</th>
          <th scope="col">เบอร์โทรศัพท์</th>
          <th scope="col">หมายเลขแฟกซ์</th>
          <th scope="col">อีเมล</th>
          <th scope="col">edit & delete</th>
        </tr>
      </thead>
      <tbody>
          <tr v-for="customer in cust" :key="customer.custid">
            <td>{{ customer.cust_id }}</td>
            <td>{{ customer.cust_name }}</td>
            <td>{{ customer.cust_address }}</td>
            <td>{{ customer.cust_postcode }}</td>
            <td>{{ customer.cust_phone }}</td>
            <td>{{ customer.cust_fax }}</td>
            <td>{{ customer.cust_email }}</td>
            <td>
              <button class="btn btn-primary" @click="editCust(customer.cust_id, $router)">Edit</button>
              <button class="btn btn-danger ms-1" @click="deleteCust(customer.cust_id)">Delete</button>
            </td>
          </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref, onMounted, onUpdated } from "vue";
import axios from "axios";

const custid = ref('');
const custname = ref('');
const custadd = ref('');
const custpost = ref('');
const custphone = ref('');
const custfax = ref('');
const custemail = ref('');

const cust = ref([])

onMounted(() =>{
  axios.get('http://localhost:5000/getCustomer').then((res) =>{
    
    cust.value = res.data
    
  }).catch((error) => {
    console.log(error);
  });
})

onUpdated(async () => {
  await axios.get('http://localhost:5000/getCustomer').then((res) =>{
    cust.value = res.data
  }).catch((error) => {
    console.log(error);
  });
})

const createCust = async () => {
  const fullCust = {
    custid : custid.value,
    custname : custname.value,
    custadd : custadd.value,
    custpost : custpost.value,
    custphone : custphone.value,
    custfax : custfax.value,
    custemail : custemail.value
  }
  await axios.post('http://localhost:5000/createCustomer', fullCust).then((res) => {
    console.log(res.data);
    alert('customer Created')
  }).catch((error) => {
    console.log(error);
  })
}

const editCust = async (custid,router) => {
  router.push({
    path: "/editcust",
    query: { id: custid },
  });
}

const deleteCust = async (custid) => {
  await axios.delete(`http://localhost:5000/deleteCustomer/${custid}`).then((res) => {
    console.log(res.data)
  }).catch((error) => {
    console.log(error);
  });
}

</script>

<style lang="scss" scoped></style>
