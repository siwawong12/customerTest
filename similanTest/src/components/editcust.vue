<template>
    <div class="wrapper ms-5 mt-3">
        <div class="row">
      <div class="form-group col-4">
        <label>รหัสลูกค้า :</label>
        <input class="form-control disable" type="text" v-model="custid" />
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
      <button @click="updateCust($router)" class="btn btn-primary text-center fw-bold text-uppercase col-8 mt-3">submit</button>
    </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onUpdated } from "vue";
import axios from "axios";
import { useRoute } from 'vue-router'

const custid = ref('');
const custname = ref('');
const custadd = ref('');
const custpost = ref('');
const custphone = ref('');
const custfax = ref('');
const custemail = ref('');

const cust = ref([])
const route = useRoute()

onMounted(async () => {
    await axios.get(`http://localhost:5000/getCustomer/${route.query.id}`).then((res) => {
        // console.log(res.data[0]);
        cust.value = res.data
        console.log(cust.value[0]);
        custid.value = cust.value[0].cust_id
        custname.value = cust.value[0].cust_name
        custadd.value = cust.value[0].cust_address
        custpost.value = cust.value[0].cust_postcode
        custphone.value = cust.value[0].cust_phone
        custfax.value = cust.value[0].cust_fax
        custemail.value = cust.value[0].cust_email
    }).catch((error) => {
        console.log(error);
    })
})



const updateCust = async (router) => {
    const fullCust = {
    custid : custid.value,
    custname : custname.value,
    custadd : custadd.value,
    custpost : custpost.value,
    custphone : custphone.value,
    custfax : custfax.value,
    custemail : custemail.value
  }
  await axios.put(`http://localhost:5000/updateCustomer/${route.query.id}`, fullCust).then((res) => {
    console.log(res.data);
    alert('customer edited')
    router.push({
        path: "/crud"
    })
  }).catch((error) => {
    console.log(error);
  })
}   

</script>

<style lang="scss" scoped>

</style>