import React, { useState } from 'react'
import './Search.scss'
import CartItem from '../../cards/CartItem/CartItem'
import TabPanel from '../../ui/TabPanel/TabPanel'
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


type SearchProps = {
    value: number
    index: number
}

const Search: React.FC<SearchProps> = (props) => {
    const { value, index } = props

    const [age, setAge] = React.useState('')
    const [search, setSearch] = useState<string>('')


    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setAge(event.target.value as string);
    }
    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value)
    }

    return (
        <div className="search">
            <TabPanel value={value} index={index}>
                <div className="search__content">
                    <div className="search__filter">

                        <FormControl variant="outlined">
                            <InputLabel>Category</InputLabel>
                            <Select
                                value={age}
                                onChange={handleChange}
                                label="Category"
                                className="search__input"
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>

                        <TextField
                            value={search}
                            label="What are you looking for?"
                            type="search"
                            variant="outlined"
                            className="search__input"
                            onChange={handleSearch}
                        />
                    </div>
                    <div className="search__body">
                        {
                            new Array(12).fill('').map((v, index) => (
                                <CartItem
                                    key={index}
                                    name="Women's tracksuit asdasdas da sd as"
                                    description="description sada s"
                                    imgSrc="https://i.pinimg.com/736x/9d/ec/55/9dec557f5787213563ff128a65de4629--pop-art-illustration-illustration-tutorial.jpg"
                                    totalPrice={512}
                                    borderBottom={true}
                                />
                            ))
                        }
                    </div>
                </div>
            </TabPanel>
        </div>
    )
}

export default Search