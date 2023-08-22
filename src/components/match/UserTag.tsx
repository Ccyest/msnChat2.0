import { Badge,  useColorModeValue} from "@chakra-ui/react";

type UserTagProps = {
  content: string;
};

const UserTag: React.FC<UserTagProps> = ({content}) =>{
  return(
    <Badge
    px={2}
    py={1}
    borderRadius={5}
    shadow="0px 4px 10px rgba(0, 0, 0, 0.25)"  // Custom shadow
    bg={useColorModeValue('gray.100', 'gray.700')}
    margin={1}
    fontWeight={'400'}>
    {'# '+content}
  </Badge>
  )
}

export default UserTag