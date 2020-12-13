
import {shuffle} from 'lodash';
import './style.scss';

interface ITags {
    value: string;
    count: number;
    priority?: boolean;
}


interface IProps {
    tags: ITags[]
}

const fontTypes = ['tiny', 'small', 'medium', 'big'];

const getRandomClass = (tag: ITags) => {
    if(tag.priority) {
        return 'large';
    }
    
    const randNum = Math.floor(Math.random() * fontTypes.length);
    const randomClass = fontTypes[randNum];
    return randomClass;
}

const extraTags: ITags[] = [];

const getExtraTags = (tags: ITags[]) => {
    if(extraTags.length) return extraTags;

    tags.forEach(({value,count,priority}) => {
        for(let i=0; i<count; i++){
            extraTags.push({value, count, priority});
        }
    });

    return extraTags;

}

export const RenderTags = (props: IProps) => {
    const {tags} = props;

    const extraTags = getExtraTags(tags);
    const shuffledTags = shuffle(extraTags);

    return (
        <div className={'wrapper'}>
            {
                shuffledTags && shuffledTags.map((tag) => 
                    <span className={getRandomClass(tag)}>{tag.value}</span>
                )
            }
        </div>
    );
};