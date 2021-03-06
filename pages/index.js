import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link';

export default function Home({data,countries}) {

  return (
    <div className={styles.container}>

      <Head>
        <title>Demo web site</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/virus.svg" />
      </Head>

      <main className={styles.main}>

       <div className={styles.header}>
         <p>website last Updated on {data.Date.split('T')[0]}</p>
         <p>Top 10 countries with most COVID cases</p>
       </div>

       <div className = {styles.appcontainer}>
         <h2 className = {styles.apptitle}>Countries with highest COVID-19 cases</h2>

          <div className={styles.cardwrapper}>

            { countries.map(country =>{

              return(

                <Link key={country.ID} href={"/" + country.Slug }><a className={styles.cardcontainer}>

                    <div className={styles.countrycontent}>
                      <div className={styles.cardpic}>
                        <img className={styles.cardimg} src={"https://flagcdn.com/"+country.CountryCode.toLowerCase()+".svg"} alt={country.Country}/>
                      </div>
                      <p className={styles.countryinfo}>{country.Country} <span>{country.CountryCode}</span> </p>
                    </div>

                    <div className={styles.cardcontent}>
                      <p className={styles.texcont}> <span className={styles.textinfo}>Confirmed Cases</span> <span className={styles.numberinfo}>{country.TotalConfirmed}</span></p>
                      <p className={styles.texcont}> <span className={styles.textinfo}>Confirmed Deaths</span> <span className={styles.numberinfo}>{country.TotalDeaths}</span></p>
                      <p className={styles.texcont}> <span className={styles.textinfo}>Confirmed Recovered</span> <span className={styles.numberinfo}>{country.TotalRecovered}</span></p>
                    </div>

                  </a>
                </Link>

              )

            })}

          </div>
       </div>


      </main>
    </div>
  )
}


export async function getServerSideProps(context) {
  const res = await fetch('https://api.covid19api.com/summary');
  const data = await res.json();
  let countries = await data.Countries.filter(country => country.TotalConfirmed > 2000000);
  const global = await data.Global
  countries.sort((a,b)=>( a.TotalConfirmed < b.TotalConfirmed) ? 1 : -1 );
  countries = countries.slice(1,11);
  return {
    props: {data,countries}, // will be passed to the page component as props
  }
}
