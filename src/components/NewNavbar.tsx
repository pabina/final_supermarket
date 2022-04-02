import React, { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';


type category= {
    id:number,
    title:string,
    header: string,
    subcategories: string[],
}

function NewNavbar():JSX.Element {
    const [categories, setCategories] = useState<category[]>([])
    useEffect(() => {
        setCategories([
            {
                id:1,
                title: 'GROCERIES',
                header: 'All Groceries',
                subcategories: ['Dals & Pulses', 'Almonds', 'Cashews', 'Dry Fruit', 'Mukhwas', 'Rice & Rice Products']
            },
        ])
    }, [])

    return (
        <div className="navigation-agileits">
            <Container>
                <Navbar>
                    <Navbar.Toggle
                        aria-controls="basic-navbar-nav"
                        className="navbar-header nav_2"
                    />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="nav">
                            <Link className="nav-link" to="/">
                                HOME
                            </Link>
                            <Link className="nav-link" to="/shopNow">
                                ALL PRODUCTS
                            </Link>

                            {categories.map((category) => {
                                return (
                                    category.subcategories ? (
                                        <NavDropdown title={category.title}>

                                            <ul className="multi-column-dropdown">
                                                <h6>{category.header}</h6>
                                                {category.subcategories.map((sub) =>
                                                (
                                                    <NavDropdown.Item>
                                                        {sub}
                                                    </NavDropdown.Item>
                                                )
                                                )
                                                }
                                            </ul>

                                        </NavDropdown>
                                    ) : (
                                        <Link key={category.id}
                                            className="nav-link"
                                            to={'/' + category.title.toLowerCase()}
                                        >
                                            {category.title}
                                        </Link>
                                    )

                                );
                            })}
                            <Link className="nav-link" to="/contact">
                                CONTACT
                            </Link>
                        </Nav>
                    </Navbar.Collapse>

                  
                </Navbar>
            </Container>
        </div >
    )
}

export default NewNavbar;
