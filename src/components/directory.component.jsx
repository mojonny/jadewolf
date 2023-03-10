//import './directory.styles.scss';
import CategoryItem from './category-item.component';

export default function Directory({ categories }) {
	return (
		<div className="directory-container">
			{categories.map((category) => (
				<CategoryItem key={category.id} category={category} />
			))}
		</div>
	);
}
