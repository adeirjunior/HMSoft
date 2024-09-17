import { Button } from './ui/button';
import { Icons } from './icons';
import { Link } from 'react-router-dom';

export default function GithubSignInButton() {

    return (
        <Link to="dashboard">
            <Button
                className="w-full"
                variant="outline"
                type="button"
            >
                <Icons.User className="mr-2 h-4 w-4" />
                Continue sem conta
            </Button>
        </Link>
    );
}