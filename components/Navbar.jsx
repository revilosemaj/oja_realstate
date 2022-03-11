import Link from 'next/link';
import { Menu, MenuButton, MenuList, MenuItem, IconButton, Box, Flex, Spacer } from '@chakra-ui/react';
import { FcMenu, FcHome, FcAbout } from 'react-icons/fc';
import { BsSearch } from 'react-icons/bs';
import { FiKey } from 'react-icons/fi'

const Navbar = () => (
    <>
        <Flex p={2} borderBottom="1px" borderColor="gray.100">
            <Box color='blue.400' fontWeight="bold" fontSize="3xl">
                Realtor
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
                        <MenuItem icon={<FcHome /> }>
                            <Link href='/' passHref>
                            Home
                            </Link>
                        </MenuItem>
                        <MenuItem icon={<BsSearch/>}>
                            <Link href='/search' passHref>
                            Search
                            </Link>
                        </MenuItem>
                        <MenuItem icon={<FcAbout />}>
                            <Link href='/search?purpose=for-sale' passHref>
                             Buy Property
                            </Link>
                        </MenuItem>
                        <MenuItem icon={<FiKey />}>
                            <Link href='/search?purpose=for-rent' passHref>
                            Rent Property
                            </Link>
                        </MenuItem>
                    </MenuList>
                </Menu>
            </Box>
        </Flex>
    </>
)

export default Navbar;

