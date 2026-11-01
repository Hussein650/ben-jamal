import "./style.css";
import {
    createIcons,
    ShoppingCart,
    ArrowLeft,
    CircleLetterC,
    CircleLetterR,
    User,
    Lock,
    Phone,
    Mail,
    ShieldCheck,
    UserPlus,
    Shirt,
    CheckCircle,
    Copyright,
    LogIn,
    Tag,
    Truck,
    RefreshCcw,
    MapPin,
    Clock,
    X,
    Minus,
    Plus,
    ShoppingBag,
    Trash2,
    CreditCard,
    Copy,
    Upload,
    Receipt
} from "lucide";

createIcons({
    icons: {
        ShoppingCart,
        ArrowLeft,
        CircleLetterC,
        CircleLetterR,
        User,
        Lock,
        Phone,
        Mail,
        ShieldCheck,
        UserPlus,
        Shirt,
        CheckCircle,
        Copyright,
        LogIn,
        Tag,
        Truck,
        RefreshCcw,
        MapPin,
        Clock,
        X,
        Minus,
        Plus,
        ShoppingBag,
        Trash2,
        CreditCard,
        Copy,
        Upload,
        Receipt
    },
});

const modal = document.getElementById('cartModal');

// فتح النافذة
document.querySelectorAll('[data-add-to-cart]').forEach((btn) => {
  btn.addEventListener('click', () => modal.showModal());
});

// إغلاق النافذة عند الضغط خارجها
modal.addEventListener('click', (e) => {
  if (e.target === modal) modal.close();
});