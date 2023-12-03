import Layout from "@/app/components/Layout"
import "../app/globals.css"

function App({ Component, pageprops }) {

    return (
        <Layout>
            <Component {...pageprops} />
        </Layout>
    )
}

export default App