import DashboardIcon from "@mui/icons-material/Dashboard";
import ChatIcon from "@mui/icons-material/Chat";
import PeopleIcon from "@mui/icons-material/People";
import PostAddIcon from "@mui/icons-material/PostAdd";
import SearchIcon from "@mui/icons-material/Search";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import FolderIcon from '@mui/icons-material/Folder';
import SettingsIcon from '@mui/icons-material/Settings';

export const mainMenus = [
  { id: 1, name: "Dashboard", icon: <DashboardIcon /> },
  { id: 2, name: "Inbox", icon: <ChatIcon /> },
];
export const workspace = [
  { id: 1, name: "Accounts", icon: <PeopleIcon /> },
  { id: 2, name: "Schedule Post", icon: <PostAddIcon /> },
  { id: 3, name: "Communities", icon: <SearchIcon /> },
  { id: 3, name: "Analytics", icon: <AnalyticsIcon /> },
];
export const general = [
  { id: 1, name: "File & Folders", icon: <FolderIcon /> },
  { id: 2, name: "Settings", icon: <SettingsIcon /> },
];
