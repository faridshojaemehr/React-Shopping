import { Card } from 'react-bootstrap'

type producProps = {
	id: number
	title: string
	price: number
	imgUrl: string
}

function Product(producProps: producProps) {
	return (
		<Card>
			<Card.Img
				variant="top"
				src={producProps.imgUrl}
				height="200px"
				style={{ objectFit: 'cover' }}
			/>
			<Card.Body className="d-flex flex-column bg-dark">
				<Card.Title
					className="d-flex 
                justify-content-between 
                align-items-baseline mb-2"
				>
					<span className="fs-3 text-light">{producProps.title}</span>
					<span className="fs-3 text-light">{producProps.price}</span>
				</Card.Title>
			</Card.Body>
		</Card>
	)
}

export default Product
