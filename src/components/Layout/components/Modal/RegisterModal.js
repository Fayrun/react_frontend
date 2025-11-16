import { useState } from 'react';
import styles from './Modal.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function RegisterModal({ isOpen, onClose, onSwitchToLogin }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [captcha, setCaptcha] = useState('');
    const captchaCode = '27722'; // Giả lập captcha

    if (!isOpen) return null;

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Đăng ký với:', { email, password, captcha });
    };

    const refreshCaptcha = () => {
        console.log('Làm mới captcha');
    };

    return (
        <div className={cx('modal-overlay')} onClick={onClose}>
            <div className={cx('modal-content')} onClick={(e) => e.stopPropagation()}>
                <button className={cx('close-btn')} onClick={onClose}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                </button>

                <h2 className={cx('modal-title')}>ĐĂNG KÝ MỚI</h2>

                <form onSubmit={handleSubmit}>
                    <div className={cx('form-group')}>
                        <label>Email</label>
                        <input
                            type="email"
                            placeholder="Nhập email của bạn"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className={cx('input')}
                        />
                    </div>

                    <div className={cx('form-group')}>
                        <label>Mật khẩu:</label>
                        <input
                            type="password"
                            placeholder="Nhập mật khẩu"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className={cx('input')}
                        />
                    </div>

                    <div className={cx('form-group')}>
                        <div className={cx('captcha-group')}>
                            <input
                                type="text"
                                placeholder="Mã xác nhận"
                                value={captcha}
                                onChange={(e) => setCaptcha(e.target.value)}
                                className={cx('input', 'captcha-input')}
                            />
                            <div className={cx('captcha-code')}>
                                {captchaCode}
                                <button type="button" className={cx('refresh-captcha')} onClick={refreshCaptcha}>
                                    🔄
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className={cx('form-footer')}>
                        <button type="button" className={cx('link-btn')} onClick={onSwitchToLogin}>
                            Đăng nhập
                        </button>
                    </div>

                    <div className={cx('button-group')}>
                        <button type="submit" className={cx('submit-btn', 'orange')}>
                            Đăng ký
                        </button>
                        <button type="button" className={cx('submit-btn', 'blue')} onClick={onClose}>
                            Hủy
                        </button>
                    </div>

                    <div className={cx('social-login')}>
                        <button type="button" className={cx('social-btn', 'facebook')}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                            </svg>
                        </button>
                        <button type="button" className={cx('social-btn', 'google')}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                            </svg>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default RegisterModal;
