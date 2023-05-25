
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface LoginUserInput {
    name?: Nullable<string>;
    password?: Nullable<string>;
}

export interface CreateBookingInput {
    exampleField?: Nullable<number>;
}

export interface UpdateBookingInput {
    id: number;
}

export interface CreateCategoryInput {
    exampleField?: Nullable<number>;
}

export interface UpdateCategoryInput {
    id: number;
}

export interface CreateConferenceInput {
    exampleField?: Nullable<number>;
}

export interface UpdateConferenceInput {
    id: number;
}

export interface CreateEventInput {
    exampleField?: Nullable<number>;
}

export interface UpdateEventInput {
    id: number;
}

export interface CreateFeedbackInput {
    exampleField?: Nullable<number>;
}

export interface UpdateFeedbackInput {
    id: number;
}

export interface CreateGuestInput {
    exampleField?: Nullable<number>;
}

export interface UpdateGuestInput {
    id: number;
}

export interface CreateHotelInput {
    name: string;
    email?: Nullable<string>;
    address: string;
    phone?: Nullable<string>;
    photo?: Nullable<string>;
}

export interface UpdateHotelInput {
    _id: string;
}

export interface CreateHousekeepingInput {
    exampleField?: Nullable<number>;
}

export interface UpdateHousekeepingInput {
    id: number;
}

export interface CreateInvoiceInput {
    exampleField?: Nullable<number>;
}

export interface UpdateInvoiceInput {
    id: number;
}

export interface CreateMaintenanceInput {
    exampleField?: Nullable<number>;
}

export interface UpdateMaintenanceInput {
    id: number;
}

export interface CreatePaymentInput {
    exampleField?: Nullable<number>;
}

export interface UpdatePaymentInput {
    id: number;
}

export interface CreateReservationInput {
    exampleField?: Nullable<number>;
}

export interface UpdateReservationInput {
    id: number;
}

export interface CreateRoomInput {
    exampleField?: Nullable<number>;
}

export interface UpdateRoomInput {
    id: number;
}

export interface CreateServiceInput {
    exampleField?: Nullable<number>;
}

export interface UpdateServiceInput {
    id: number;
}

export interface CreateStaffInput {
    exampleField?: Nullable<number>;
}

export interface UpdateStaffInput {
    id: number;
}

export interface CreateUserInput {
    name?: Nullable<string>;
    email?: Nullable<string>;
    password?: Nullable<string>;
    phone?: Nullable<string>;
    website?: Nullable<string>;
    photo?: Nullable<string>;
    cnpj?: Nullable<string>;
    businessCreated?: Nullable<string>;
}

export interface UpdateUserInput {
    _id?: Nullable<string>;
}

export interface User {
    _id?: Nullable<string>;
    name?: Nullable<string>;
    email?: Nullable<string>;
    phone?: Nullable<string>;
    website?: Nullable<string>;
    photo?: Nullable<string>;
    cnpj?: Nullable<string>;
    businessCreated?: Nullable<string>;
    password?: Nullable<string>;
}

export interface IMutation {
    login(loginUserInput: LoginUserInput): User | Promise<User>;
    createBooking(createBookingInput: CreateBookingInput): Booking | Promise<Booking>;
    updateBooking(updateBookingInput: UpdateBookingInput): Booking | Promise<Booking>;
    removeBooking(id: number): Nullable<Booking> | Promise<Nullable<Booking>>;
    createCategory(createCategoryInput: CreateCategoryInput): Category | Promise<Category>;
    updateCategory(updateCategoryInput: UpdateCategoryInput): Category | Promise<Category>;
    removeCategory(id: number): Nullable<Category> | Promise<Nullable<Category>>;
    createConference(createConferenceInput: CreateConferenceInput): Conference | Promise<Conference>;
    updateConference(updateConferenceInput: UpdateConferenceInput): Conference | Promise<Conference>;
    removeConference(id: number): Nullable<Conference> | Promise<Nullable<Conference>>;
    createEvent(createEventInput: CreateEventInput): Event | Promise<Event>;
    updateEvent(updateEventInput: UpdateEventInput): Event | Promise<Event>;
    removeEvent(id: number): Nullable<Event> | Promise<Nullable<Event>>;
    createFeedback(createFeedbackInput: CreateFeedbackInput): Feedback | Promise<Feedback>;
    updateFeedback(updateFeedbackInput: UpdateFeedbackInput): Feedback | Promise<Feedback>;
    removeFeedback(id: number): Nullable<Feedback> | Promise<Nullable<Feedback>>;
    createGuest(createGuestInput: CreateGuestInput): Guest | Promise<Guest>;
    updateGuest(updateGuestInput: UpdateGuestInput): Guest | Promise<Guest>;
    removeGuest(id: number): Nullable<Guest> | Promise<Nullable<Guest>>;
    createHotel(createHotelInput: CreateHotelInput): Hotel | Promise<Hotel>;
    updateHotel(updateHotelInput: UpdateHotelInput): Hotel | Promise<Hotel>;
    removeHotel(_id: string): Nullable<Hotel> | Promise<Nullable<Hotel>>;
    createHousekeeping(createHousekeepingInput: CreateHousekeepingInput): Housekeeping | Promise<Housekeeping>;
    updateHousekeeping(updateHousekeepingInput: UpdateHousekeepingInput): Housekeeping | Promise<Housekeeping>;
    removeHousekeeping(id: number): Nullable<Housekeeping> | Promise<Nullable<Housekeeping>>;
    createInvoice(createInvoiceInput: CreateInvoiceInput): Invoice | Promise<Invoice>;
    updateInvoice(updateInvoiceInput: UpdateInvoiceInput): Invoice | Promise<Invoice>;
    removeInvoice(id: number): Nullable<Invoice> | Promise<Nullable<Invoice>>;
    createMaintenance(createMaintenanceInput: CreateMaintenanceInput): Maintenance | Promise<Maintenance>;
    updateMaintenance(updateMaintenanceInput: UpdateMaintenanceInput): Maintenance | Promise<Maintenance>;
    removeMaintenance(id: number): Nullable<Maintenance> | Promise<Nullable<Maintenance>>;
    createPayment(createPaymentInput: CreatePaymentInput): Payment | Promise<Payment>;
    updatePayment(updatePaymentInput: UpdatePaymentInput): Payment | Promise<Payment>;
    removePayment(id: number): Nullable<Payment> | Promise<Nullable<Payment>>;
    createReservation(createReservationInput: CreateReservationInput): Reservation | Promise<Reservation>;
    updateReservation(updateReservationInput: UpdateReservationInput): Reservation | Promise<Reservation>;
    removeReservation(id: number): Nullable<Reservation> | Promise<Nullable<Reservation>>;
    createRoom(createRoomInput: CreateRoomInput): Room | Promise<Room>;
    updateRoom(updateRoomInput: UpdateRoomInput): Room | Promise<Room>;
    removeRoom(id: number): Nullable<Room> | Promise<Nullable<Room>>;
    createService(createServiceInput: CreateServiceInput): Service | Promise<Service>;
    updateService(updateServiceInput: UpdateServiceInput): Service | Promise<Service>;
    removeService(id: number): Nullable<Service> | Promise<Nullable<Service>>;
    createStaff(createStaffInput: CreateStaffInput): Staff | Promise<Staff>;
    updateStaff(updateStaffInput: UpdateStaffInput): Staff | Promise<Staff>;
    removeStaff(id: number): Nullable<Staff> | Promise<Nullable<Staff>>;
    createUser(createUserInput: CreateUserInput): User | Promise<User>;
    updateUser(updateUserInput: UpdateUserInput): User | Promise<User>;
    removeUser(_id: string): Nullable<User> | Promise<Nullable<User>>;
}

export interface Booking {
    exampleField?: Nullable<number>;
}

export interface IQuery {
    bookings(): Nullable<Booking>[] | Promise<Nullable<Booking>[]>;
    booking(id: number): Nullable<Booking> | Promise<Nullable<Booking>>;
    categories(): Nullable<Category>[] | Promise<Nullable<Category>[]>;
    category(id: number): Nullable<Category> | Promise<Nullable<Category>>;
    conferences(): Nullable<Conference>[] | Promise<Nullable<Conference>[]>;
    conference(id: number): Nullable<Conference> | Promise<Nullable<Conference>>;
    events(): Nullable<Event>[] | Promise<Nullable<Event>[]>;
    event(id: number): Nullable<Event> | Promise<Nullable<Event>>;
    feedbacks(): Nullable<Feedback>[] | Promise<Nullable<Feedback>[]>;
    feedback(id: number): Nullable<Feedback> | Promise<Nullable<Feedback>>;
    guests(): Nullable<Guest>[] | Promise<Nullable<Guest>[]>;
    guest(id: number): Nullable<Guest> | Promise<Nullable<Guest>>;
    hotels(): Nullable<Hotel>[] | Promise<Nullable<Hotel>[]>;
    hotel(_id: string): Nullable<Hotel> | Promise<Nullable<Hotel>>;
    housekeepings(): Nullable<Housekeeping>[] | Promise<Nullable<Housekeeping>[]>;
    housekeeping(id: number): Nullable<Housekeeping> | Promise<Nullable<Housekeeping>>;
    invoices(): Nullable<Invoice>[] | Promise<Nullable<Invoice>[]>;
    invoice(id: number): Nullable<Invoice> | Promise<Nullable<Invoice>>;
    maintenances(): Nullable<Maintenance>[] | Promise<Nullable<Maintenance>[]>;
    maintenance(id: number): Nullable<Maintenance> | Promise<Nullable<Maintenance>>;
    payments(): Nullable<Payment>[] | Promise<Nullable<Payment>[]>;
    payment(id: number): Nullable<Payment> | Promise<Nullable<Payment>>;
    reservations(): Nullable<Reservation>[] | Promise<Nullable<Reservation>[]>;
    reservation(id: number): Nullable<Reservation> | Promise<Nullable<Reservation>>;
    rooms(): Nullable<Room>[] | Promise<Nullable<Room>[]>;
    room(id: number): Nullable<Room> | Promise<Nullable<Room>>;
    services(): Nullable<Service>[] | Promise<Nullable<Service>[]>;
    service(id: number): Nullable<Service> | Promise<Nullable<Service>>;
    staffs(): Nullable<Staff>[] | Promise<Nullable<Staff>[]>;
    staff(id: number): Nullable<Staff> | Promise<Nullable<Staff>>;
    users(): Nullable<User>[] | Promise<Nullable<User>[]>;
    user(_id: string): Nullable<User> | Promise<Nullable<User>>;
}

export interface Category {
    exampleField?: Nullable<number>;
}

export interface Conference {
    exampleField?: Nullable<number>;
}

export interface Event {
    exampleField?: Nullable<number>;
}

export interface Feedback {
    exampleField?: Nullable<number>;
}

export interface Guest {
    exampleField?: Nullable<number>;
}

export interface Hotel {
    _id: string;
    name?: Nullable<string>;
    email?: Nullable<string>;
    address?: Nullable<string>;
    phone?: Nullable<string>;
    photo?: Nullable<string>;
    active?: Nullable<boolean>;
}

export interface Housekeeping {
    exampleField?: Nullable<number>;
}

export interface Invoice {
    exampleField?: Nullable<number>;
}

export interface Maintenance {
    exampleField?: Nullable<number>;
}

export interface Payment {
    exampleField?: Nullable<number>;
}

export interface Reservation {
    exampleField?: Nullable<number>;
}

export interface Room {
    exampleField?: Nullable<number>;
}

export interface Service {
    exampleField?: Nullable<number>;
}

export interface Staff {
    exampleField?: Nullable<number>;
}

type Nullable<T> = T | null;
