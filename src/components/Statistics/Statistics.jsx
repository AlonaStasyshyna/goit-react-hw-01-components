import PropTypes from 'prop-types';
import { Section, Title, List, ListItem } from './Statistics.styled';

export const Statistics = ({title, stats}) => {
    return (
        <Section>
            {title && <Title>{title}</Title>}

            <List>
                {stats.map((statsItem) => (
                    <ListItem key={statsItem.id}>
                        <span>{statsItem.label}</span>
                        <span>{statsItem.percentage}%</span>
                    </ListItem>
                ))}
            </List>
        </Section>
    )
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    })).isRequired,
}