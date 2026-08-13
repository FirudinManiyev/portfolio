# Home CSP və slider idarəetməsi dizaynı

## Məqsəd

Deploy edilmiş Home səhifəsində Lanyard/Rapier WebAssembly modulunun CSP tərəfindən bloklanması nəticəsində yaranan qara ekranı aradan qaldırmaq və hər iki Home sliderinin idarəetməsini sadələşdirmək.

## Kök səbəb

Vercel response header-ində `script-src 'self'` qaydası var. `@react-three/rapier` WebAssembly modulunu compile etdikdə brauzer bu əməliyyatı bloklayır. Xəta lazy-loaded Lanyard subtree-dən yuxarı qalxdığı üçün Home route render-i dayanır; Lanyard olmayan route-lar işləməyə davam edir.

## Seçilmiş həll

### CSP

- `script-src` qaydasına yalnız WebAssembly compilation üçün `'wasm-unsafe-eval'` əlavə ediləcək.
- Geniş JavaScript eval icazəsi verən `'unsafe-eval'` əlavə edilməyəcək.
- Mövcud `default-src`, `object-src`, `frame-ancestors`, EmailJS `connect-src` və digər təhlükəsizlik qaydaları qorunacaq.

### Home dayanıqlılığı

- Lanyard lazy import-u ayrıca React error boundary ilə əhatə olunacaq.
- Lanyard/WebGL/WASM gələcəkdə yenə xəta versə, yalnız 3D sahə təhlükəsiz fallback göstərəcək; Home məzmunu işləməyə davam edəcək.
- Fallback dekorativ və qısa olacaq, əlavə interaktiv davranış yaratmayacaq.

### Slider idarəetməsi

- Pause/play düyməsi və ona aid public prop-lar `CarouselControls` komponentindən silinəcək.
- Autoplay saxlanılacaq; hover və klaviatura focus-u zamanı müvəqqəti dayanma davranışı qorunacaq.
- Sol/sağ oxlar slider viewport-unun vertikal mərkəzində yerləşəcək.
- Desktop və tabletdə oxlar kart sırasının xarici kənarlarında görünəcək.
- Mobildə oxlar kartın sol/sağ kənarına qismən overlay olacaq ki, horizontal overflow yaranmasın.
- Səhifə indikatorları sliderin aşağısında mərkəzdə qalacaq.

## Komponent sərhədləri

- `vercel.json`: production CSP header-i.
- `src/components/LanyardErrorBoundary.tsx`: yalnız Lanyard render/runtime xətalarını izolasiya edir.
- `src/pages/Home.tsx`: Lanyard suspense və error boundary kompozisiyası.
- `src/components/CarouselControls.tsx`: yan oxlar və aşağı indikatorlar.
- `src/components/HomeProjectsSection.tsx` və `HomeCertificatesSection.tsx`: slider viewport-u üçün relative wrapper və sadələşdirilmiş control props.
- `src/hooks/useCarousel.ts`: autoplay və interaction pause davranışı; manual pause state-i silinir.

## Test və qəbul meyarları

- CSP regression testi `script-src` daxilində `'wasm-unsafe-eval'` olduğunu və `'unsafe-eval'` olmadığını yoxlayır.
- Komponent regression testi pause/play control-larının olmadığını, hər iki istiqamət düyməsinin isə mövcud olduğunu yoxlayır.
- Lanyard error boundary testi child render xətasının bütün səhifəyə yayılmadığını yoxlayır.
- `npm run lint` və `npm run build` uğurla tamamlanır.
- Production preview-də Home və digər route-lar HTTP 200 qaytarır.
- Desktop/tablet/mobile ölçülərində slider oxları horizontal overflow yaratmır.

## Scope xarici

- Lanyard fizikasının və ya Three.js səhnəsinin yenidən yazılması.
- `'unsafe-eval'` kimi geniş CSP istisnası.
- Slider autoplay intervalının və kart məzmununun dəyişdirilməsi.
