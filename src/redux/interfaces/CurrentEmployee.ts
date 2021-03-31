export interface CurrentEmployee {
    id: number | string | null;
    first_name: string;
    last_name: string;
    phone: string;
        email: string;
        address: string;
        city: string;
        state: string;
        zip: string;
        photo?: string | null;
        notes?: string | null;
}