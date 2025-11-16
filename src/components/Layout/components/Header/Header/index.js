import { useState, useEffect } from 'react';
import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import images from '../../../../../assets/images';
import LoginModal from '../../Modal/LoginModal';
import RegisterModal from '../../Modal/RegisterModal';
import ForgotPasswordModal from '../../Modal/ForgotPasswordModal';

const cx = classNames.bind(styles);

function Header() {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [activeModal, setActiveModal] = useState(null); // 'login', 'register', 'forgot', null

    // Load theme từ localStorage khi component mount
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            setIsDarkMode(true);
            document.documentElement.setAttribute('data-theme', 'dark');
        }
    }, []);

    // Toggle theme
    const toggleTheme = () => {
        const newTheme = !isDarkMode;
        setIsDarkMode(newTheme);

        if (newTheme) {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
        }
    };

    // Modal handlers
    const openLoginModal = () => setActiveModal('login');
    const openRegisterModal = () => setActiveModal('register');
    const openForgotModal = () => setActiveModal('forgot');
    const closeModal = () => setActiveModal(null);

    return (
        <>
            <header className={cx('wrapper', { dark: isDarkMode })}>
                <div className={cx('inner')}>
                    {/* Logo */}
                    <div className={cx('logo')}>
                        <img src={isDarkMode ? images['logo-dark'] : images['logo-white']} alt="TruyenQQ" />
                    </div>

                    {/* Theme Toggle Button */}
                    <button
                        className={cx('theme-toggle')}
                        onClick={toggleTheme}
                        title={isDarkMode ? 'Chế độ sáng' : 'Chế độ tối'}
                    >
                        {isDarkMode ? (
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
                                <path
                                    d="M12 2V4M12 20V22M4 12H2M6.31412 6.31412L4.8999 4.8999M17.6859 6.31412L19.1001 4.8999M6.31412 17.69L4.8999 19.1042M17.6859 17.69L19.1001 19.1042M22 12H20"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                />
                            </svg>
                        ) : (
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path
                                    d="M9 21H15M12 3C8.68629 3 6 5.68629 6 9C6 11.0935 7.0043 12.9395 8.5 14V16C8.5 17.1046 9.39543 18 10.5 18H13.5C14.6046 18 15.5 17.1046 15.5 16V14C16.9957 12.9395 18 11.0935 18 9C18 5.68629 15.3137 3 12 3Z"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        )}
                    </button>

                    {/* Search */}
                    <div className={cx('search')}>
                        <input type="text" placeholder="Bạn muốn tìm truyện gì" className={cx('search-input')} />
                        <button className={cx('search-btn')}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                <path
                                    d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </button>
                    </div>

                    {/* Actions */}
                    <div className={cx('actions')}>
                        <button className={cx('action-btn')} onClick={openRegisterModal}>
                            Đăng ký
                        </button>
                        <button className={cx('action-btn', 'primary')} onClick={openLoginModal}>
                            Đăng nhập
                        </button>
                    </div>
                </div>
            </header>

            {/* Modals */}
            <LoginModal
                isOpen={activeModal === 'login'}
                onClose={closeModal}
                onSwitchToRegister={openRegisterModal}
                onSwitchToForgot={openForgotModal}
            />
            <RegisterModal isOpen={activeModal === 'register'} onClose={closeModal} onSwitchToLogin={openLoginModal} />
            <ForgotPasswordModal
                isOpen={activeModal === 'forgot'}
                onClose={closeModal}
                onSwitchToLogin={openLoginModal}
            />
        </>
    );
}

export default Header;
