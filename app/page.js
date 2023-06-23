import { Esq } from "../component/esq"
import { Dir } from "../component/dir"
import { Footer } from "../component/footer"
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Home() {
    return(
      <>
      <section>
        <Esq></Esq>
        <Dir></Dir>
      </section>
      <Footer></Footer>
      </>
    )
}