import { FC } from "react"
type Props = {
    name: string
}

const FCPropsComponent : FC<Props> = ({ name }) => {
    return(<>
    <h2>FCProps</h2>
    { name }
    </>)
}

export default FCPropsComponent