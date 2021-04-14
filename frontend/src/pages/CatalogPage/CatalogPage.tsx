import React, { useEffect, useState } from 'react'
import { RouteComponentProps } from 'react-router'
import './CatalogPage.scss'
import TuneIcon from '@material-ui/icons/Tune';
import Pagination from '@material-ui/lab/Pagination';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import GradeIcon from '@material-ui/icons/Grade';
import NewReleasesIcon from '@material-ui/icons/NewReleases';
import CallMadeIcon from '@material-ui/icons/CallMade';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';
import SendIcon from '@material-ui/icons/Send';
import ProductCard from '../../components/cards/ProductCard/ProductCard';




interface CatalogPageProps extends RouteComponentProps<MatchParams> {

}

type MatchParams = { categoryName: string }

const sortItems = [
    {
        icon: TrendingUpIcon,
        sortName: 'Bestsellers',
        sortValue: 'bestsellers',
    },
    {
        icon: NewReleasesIcon,
        sortName: 'New',
        sortValue: 'new',
    },
    {
        icon: GradeIcon,
        sortName: 'Rate',
        sortValue: 'rate',
    },
]

const CatalogPage: React.FC<CatalogPageProps> = (props) => {
    const {
        match
    } = props

    const [showFilter, setShowFilter] = useState(false)
    const [sortedBy, setSortedBy] = useState<string>('new')
    const [ascSort, setAscSort] = useState<boolean>(true)
    const [page, setPage] = useState<number>(6)
    const [isSmallPaginator, setSmallPaginator] = useState<boolean>(false)

    const [fetchingData, setFetchingData] = useState<boolean>(false)

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);


    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    const handleSortBy = (value: string) => {
        setSortedBy(value)
        handleClose()
    }

    const handlePaginate = (event: React.ChangeEvent<unknown>, page: number) => {
        setFetchingData(true)
        setTimeout(() => {
            setPage(page)
            setFetchingData(false)
        }, 2000)
    }

    useEffect(() => {
        const handleResize = (e: UIEvent) => {
            const width = window.innerWidth
            if (width < 360 && !isSmallPaginator) {
                setSmallPaginator(true)
            } else if (width >= 360 && isSmallPaginator) {
                setSmallPaginator(false)
            }
        }
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [isSmallPaginator])

    return (
        <>
            <section className="catalog-title">
                <div className="container">
                    <h1 className="catalog-title__text">
                        {match.params.categoryName}
                    </h1>
                </div>
            </section>
            <section className="filter">
                <div className="container">
                    <div className="filter__panel">
                        <Button className="filter__show-filter-btn">
                            <TuneIcon className="icon" />
                            <span>filter</span>
                        </Button>

                        <Button className="filter__asc-btn" onClick={() => setAscSort(!ascSort)}>
                            <CallMadeIcon className={ascSort ? "icon rotate" : "icon"} />
                            <span> {ascSort ? 'asc' : 'desc'} </span>
                        </Button>

                        <div>
                            <Button
                                className={anchorEl ? "filter__filter-by-btn active" : "filter__filter-by-btn"}
                                onClick={handleClick}
                            >
                                {sortedBy}
                                <NavigateNextIcon />
                            </Button>
                            <Menu
                                anchorEl={anchorEl}
                                keepMounted
                                elevation={0}
                                getContentAnchorEl={null}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                            >
                                {
                                    sortItems.map((item, i) => (
                                        <MenuItem
                                            key={i}
                                            className="filter__filter-by-item"
                                            onClick={() => handleSortBy(item.sortValue)}
                                        >
                                            <item.icon>
                                                <SendIcon />
                                            </item.icon>
                                            <ListItemText primary={item.sortName} />
                                        </MenuItem>
                                    ))
                                }
                            </Menu>
                        </div>

                        <Pagination
                            count={10}
                            page={page}
                            size={isSmallPaginator ? 'small' : 'medium'}
                            variant="outlined"
                            shape="rounded"
                            disabled={fetchingData}
                            className="filter__pagination"
                            onChange={handlePaginate}
                        />
                    </div>
                </div>
            </section>
            <section className="cards">
                <div className="container cards__container">
                    <div className="cards__body">
                        {
                            new Array(8).fill('').map((c, i) => (
                                <ProductCard
                                    key={i}
                                    name="Women's tracksuit Q109"
                                    price="35.00"
                                    rate={3}
                                    previewSrc="/static/img/men-preview2.jpg"
                                    hoverSrc="/static/img/men-preview.jpg"
                                />
                            ))
                        }
                    </div>
                    <div className="cards__footer">
                        <div className="cards__footer-icon"></div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CatalogPage