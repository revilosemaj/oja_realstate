import Link from 'next/link';
import { Menu, MenuButton, MenuList, MenuItem, IconButton, Box, Flex, Spacer } from '@chakra-ui/react';
import { FcMenu, FcHome, FcAbout } from 'react-icons/fc';
import { BsSearch } from 'react-icons/bs';
import { FiKey } from 'react-icons/fi'

const Navbar = () => (
    <>
        <Flex p={2} borderBottom="1px" borderColor="gray.100">
            <Box color='blue.400' fontWeight="bold" fontSize="3xl">
                <Link href="/">Realtor</Link>
            </Box>
            <Spacer />
            <Box>
                <Menu >
                    <MenuButton
                        as={IconButton}
                        aria-label='Options'
                        icon={<FcMenu />}
                        variant='outline'
                    />
                    <MenuList>
                        <Link href='/' passHref>
                            <MenuItem icon={<FcHome /> }>Home</MenuItem>
                        </Link>
                        <Link href='/search' passHref>
                            <MenuItem icon={<BsSearch/>}>Search</MenuItem>
                        </Link>
                        <Link href='/search?purpose=for-sale' passHref>
                            <MenuItem icon={<FcAbout />}>Buy Property</MenuItem>
                        </Link>
                        <Link href='/search?purpose=for-rent' passHref>
                            <MenuItem icon={<FiKey />}>Rent Property</MenuItem>
                        </Link>
                    </MenuList>
                </Menu>
            </Box>
        </Flex>
    </>
)

export default Navbar;

