import Link from 'next/link'
import Image from 'next/image';
import { Text, Box, Flex, Avatar, Spacer } from '@chakra-ui/react';
import { GoVerified } from "react-icons/go";
import { FaBed, FaBath} from "react-icons/fa"
import { BsGridFill } from 'react-icons/bs';
import millify from 'millify';
import DefaultHouse from '../assets/images/house.jpg';

const Property = ({ property : { isVerified, price, rentFrequency, coverPhoto, rooms, baths, area, title, agency } }) => {

    return (
        <Link href="/" passHref>
            <Flex flexWrap="wrap" justifyContent="flex-start">
                <Box>
                    <Image 
                        src={coverPhoto ? coverPhoto.url : DefaultHouse }
                        height="220px"
                        width={400}
                        alt="house"
                    />
                </Box>
                <Box w="full">
                    <Flex justifyContent="space-between" alignItems="center">
                        <Flex alignItems="center">
                            <Box color="green.400">{isVerified && <GoVerified />} </Box>
                            <Text paddingLeft="5px"  fontWeight="bold">AED {millify(price)}{rentFrequency && `/${rentFrequency}`} </Text>
                        </Flex>
                        <Box>
                            <Avatar size="sm" src={agency?.logo?.url} />
                        </Box>
                    </Flex>
                    <Flex flexWrap="wrap" alignItems="center" color="blue.400">
                        <Text paddingRight="2">{rooms} </Text>
                        <Box paddingRight="2"><FaBed /> </Box>
                        <Text paddingRight="2"> | {baths} </Text>
                        <Box paddingRight="2"><FaBath /></Box>
                        <Text paddingRight="2">| {millify(area)} sqft </Text>
                        <Box paddingRight="2"><BsGridFill /></Box>
                    </Flex>
                </Box>
                <Text> {title.length > 27 ? title.substring(0,27) + " ..." : title}</Text>
            </Flex>
        </ Link>
    )
}

export default Property;
