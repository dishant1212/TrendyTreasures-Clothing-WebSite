import Directory from "../../components/directory/directory.component"

function Home() {

  const categories = [
    {
      id: 1,
      title: "Hats",
      imageUrl:"https://media.gq.com/photos/5a04f9a398002d2e253679f5/master/pass/fall-hats-gq-style-0816-01-1.jpg"
    },
    {
      id: 2,
      title: "Jackets",
      imageUrl:"https://deov19kjit2mc.cloudfront.net/uploads/04_bodegones_estudio_contenido_octubre_1095-3-480x600.jpg"
    },
    {
      id: 3,
      title: "Sneakers",
      imageUrl:"https://cdn.mos.cms.futurecdn.net/pemUuTxAXHHDEpm5JwnPv7-1200-80.jpg"
    },
    {
      id: 4,
      title: "Womens",
      imageUrl:"https://img.freepik.com/premium-photo/young-girl-standing-store-near-clothes-rack-holding-colorful-shopping-bags-isolated-pink_171337-68248.jpg?size=626&ext=jpg&ga=GA1.1.1826414947.1699488000&semt=ais"
    },
    {
      id: 5,
      title: "Mens",
      imageUrl:"https://time.com/shopping/static/068f53b41b3df206b10db593f54f5c26/57e17/best-mens-clothing-brands.jpg"
    }
  ]

  return <Directory categories={categories}/>
}

export default Home;