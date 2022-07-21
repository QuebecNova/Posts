import React, {useState} from 'react'
import Input from '../UI/Input'
import Select from '../UI/Select'
import { useDispatch } from 'react-redux/es/exports'
import { sortPosts, searchPosts } from '../../store/slices/postsSlice'

export default function FilterPosts() {

    const dispatch = useDispatch()

    const [searchQuery, setSearchQuery] = useState('')
    const [selectedSort, setSelectedSort] = useState('')

    function sortAllPosts(sort) {
        setSelectedSort(sort)
        dispatch(sortPosts(sort))
    }

    function getSearchedPosts(e) {
        setSearchQuery(e.target.value)
        dispatch(searchPosts(e.target.value))
    }

  return (
    <>
        <Input
                placeholder='Поиск...'
                type='text'
                value={searchQuery}
                onChange={e => getSearchedPosts(e)}
        />
        <Select
            value={selectedSort}
            onChange={sortAllPosts}
            defaultValue='Сортировка'
            options={[
                {value: 'title', name: 'По названию'},
                {value: 'body', name: 'По описанию'},
                {value: 'id', name: 'По ID'}
            ]}
        />
    </>
  )
}
