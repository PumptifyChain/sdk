async function getTracks(){

const response = await fetch(
API_URL+"/tracks"
)

return response.json()

}
