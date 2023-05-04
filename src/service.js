import axios from 'axios';

axios.defaults.baseURL=process.env.REACT_APP_API_KEY;


export default {
  getTasks: async () => {
     const result=await axios.get(`/items`)
     return result.data
  },
  addTask: async(name)=>{
    console.log('addTask', name)
    const result = await axios.post(`/items`,{Name:name,IsComplete:false})   
    return result.data;
  },
  setCompleted: async(id,isComplete)=>{
    console.log('setCompleted', {id, isComplete})
    const result = await axios.put(`/items/${id}`,{Name:"",isComplete:true},id)    
    return result.data;
  },
  deleteTask:async(id)=>{ 
    console.log("deleteTask");
      await axios.delete(`/items/${id}`)
  }};
  axios.interceptors.response.use(
    function (response) {
      return response;
    },
    function (error) {
  console.log(error);  
})


