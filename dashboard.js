  const { createApp, ref, computed, onMounted, onUnmounted, watch, nextTick } = Vue;

    // Icon Components
    const DashboardIcon = {
      template: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="9"/><rect x="14" y="3" width="7" height="5"/><rect x="14" y="12" width="7" height="9"/><rect x="3" y="16" width="7" height="5"/></svg>`
    };

    const AnalyticsIcon = {
      template: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>`
    };

    const ReportsIcon = {
      template: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>`
    };

    const UsersIcon = {
      template: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`
    };

    const SettingsIcon = {
      template: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>`
    };

    const DollarIcon = {
      template: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>`
    };

    const UsersIconLarge = {
      template: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`
    };

    const CartIcon = {
      template: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>`
    };

    const TrendIcon = {
      template: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>`
    };

    // Click outside directive
    const clickOutside = {
      mounted(el, binding) {
        el._clickOutside = (event) => {
          if (!(el === event.target || el.contains(event.target))) {
            binding.value();
          }
        };
        document.addEventListener('click', el._clickOutside);
      },
      unmounted(el) {
        document.removeEventListener('click', el._clickOutside);
      }
    };

    createApp({
      components: {
        DashboardIcon,
        AnalyticsIcon,
        ReportsIcon,
        UsersIcon,
        SettingsIcon,
        DollarIcon,
        UsersIconLarge,
        CartIcon,
        TrendIcon
      },
      directives: {
        clickOutside
      },
      setup() {
        // Theme
        const theme = ref('dark');
        const toggleTheme = () => {
          theme.value = theme.value === 'dark' ? 'light' : 'dark';
          nextTick(() => {
            renderAllCharts();
          });
        };

        // Sidebar
        const sidebarOpen = ref(false);

        // Navigation
        const currentPage = ref('dashboard');
        const navItems = ref([
          { id: 'dashboard', label: 'Dashboard', icon: 'DashboardIcon' },
          { id: 'analytics', label: 'Analytics', icon: 'AnalyticsIcon', badge: 'New' },
          { id: 'reports', label: 'Reports', icon: 'ReportsIcon' },
          { id: 'users', label: 'Users', icon: 'UsersIcon' },
          { id: 'settings', label: 'Settings', icon: 'SettingsIcon' }
        ]);

        const currentPageTitle = computed(() => {
          const item = navItems.value.find(n => n.id === currentPage.value);
          return item ? item.label : 'Dashboard';
        });

        // Search
        const searchQuery = ref('');

        // Date Range
        const dateDropdown = ref(false);
        const dateRanges = ref([
          { id: 'today', label: 'Today' },
          { id: '7days', label: 'Last 7 Days' },
          { id: '30days', label: 'Last 30 Days' },
          { id: '90days', label: 'Last 90 Days' },
          { id: 'year', label: 'This Year' }
        ]);
        const dateRange = ref(dateRanges.value[1]);

        // Notifications
        const notifDropdown = ref(false);
        const notifications = ref([
          { id: 1, message: 'New user registration increased by 24%', time: '2 min ago' },
          { id: 2, message: 'Revenue target achieved for Q4', time: '1 hour ago' },
          { id: 3, message: 'Server performance optimization completed', time: '3 hours ago' }
        ]);

        // Auto Refresh
        const autoRefresh = ref(true);
        const lastUpdated = ref(new Date().toLocaleTimeString());

        // Chart Types
        const chartTypes = ['Line', 'Bar', 'Area'];
        const activeChartType = ref('Line');

        // KPI Data
        const kpiData = ref([
          {
            label: 'Total Revenue',
            value: 284750,
            change: 12.5,
            icon: 'DollarIcon',
            iconBg: 'rgba(0, 212, 170, 0.15)',
            iconColor: '#00d4aa',
            sparkline: '',
            sparklineArea: '',
            data: []
          },
          {
            label: 'Active Users',
            value: 24892,
            change: 8.2,
            icon: 'UsersIconLarge',
            iconBg: 'rgba(59, 130, 246, 0.15)',
            iconColor: '#3b82f6',
            sparkline: '',
            sparklineArea: '',
            data: []
          },
          {
            label: 'Total Orders',
            value: 8463,
            change: -2.4,
            icon: 'CartIcon',
            iconBg: 'rgba(245, 158, 11, 0.15)',
            iconColor: '#f59e0b',
            sparkline: '',
            sparklineArea: '',
            data: []
          },
          {
            label: 'Conversion Rate',
            value: 3.24,
            change: 15.8,
            icon: 'TrendIcon',
            iconBg: 'rgba(16, 185, 129, 0.15)',
            iconColor: '#10b981',
            sparkline: '',
            sparklineArea: '',
            data: []
          }
        ]);

        // Animated KPIs
        const animatedKpis = ref(['$0', '0', '0', '0%']);

        // Traffic Sources
        const trafficSources = ref([
          { name: 'Direct', value: 35, color: '#00d4aa' },
          { name: 'Organic Search', value: 28, color: '#3b82f6' },
          { name: 'Social Media', value: 22, color: '#f59e0b' },
          { name: 'Referral', value: 15, color: '#ef4444' }
        ]);

        // Top Products
        const topProducts = ref([
          { id: 1, name: 'Enterprise Suite', category: 'Software', sales: 2456, revenue: 98500, growth: 12.5, status: 'Active' },
          { id: 2, name: 'Cloud Pro Plan', category: 'Subscription', sales: 1832, revenue: 73200, growth: 8.3, status: 'Active' },
          { id: 3, name: 'Data Analytics Tool', category: 'Software', sales: 1567, revenue: 62400, growth: -3.2, status: 'Review' },
          { id: 4, name: 'Security Package', category: 'Service', sales: 1243, revenue: 49800, growth: 15.7, status: 'Active' },
          { id: 5, name: 'API Gateway', category: 'Software', sales: 987, revenue: 39400, growth: 6.1, status: 'Active' }
        ]);

        // Recent Activity
        const recentActivity = ref([
          { action: 'New user registration: Sarah Johnson', time: '2 minutes ago' },
          { action: 'Order #4521 completed - $1,250', time: '15 minutes ago' },
          { action: 'Report generated: Q4 Analytics', time: '1 hour ago' },
          { action: 'System update deployed successfully', time: '2 hours ago' },
          { action: 'New integration connected: Slack', time: '3 hours ago' }
        ]);

        // Goals
        const goals = ref([
          { name: 'Revenue Target', current: 284750, target: 350000, color: 'linear-gradient(90deg, #00d4aa, #3b82f6)' },
          { name: 'New Users', current: 2489, target: 3000, color: 'linear-gradient(90deg, #3b82f6, #8b5cf6)' },
          { name: 'Customer Satisfaction', current: 4.6, target: 5, color: 'linear-gradient(90deg, #f59e0b, #ef4444)' }
        ]);

        // Region Data
        const regionData = ref([
          { name: 'North America', users: '12.4K', color: '#00d4aa' },
          { name: 'Europe', users: '8.7K', color: '#3b82f6' },
          { name: 'Asia', users: '6.2K', color: '#f59e0b' },
          { name: 'Others', users: '3.1K', color: '#ef4444' }
        ]);

        // Toast
        const toast = ref({ show: false, message: '', type: 'success' });

        const showToast = (message, type = 'success') => {
          toast.value = { show: true, message, type };
          setTimeout(() => {
            toast.value.show = false;
          }, 3000);
        };

        // Export Report
        const exportReport = () => {
          showToast('Report exported successfully!', 'success');
        };

        // Generate sparkline data
        const generateSparkline = () => {
          kpiData.value.forEach(kpi => {
            const data = Array.from({ length: 12 }, () => Math.random() * 40 + 10);
            kpi.data = data;
            const maxVal = Math.max(...data);
            const minVal = Math.min(...data);
            const range = maxVal - minVal || 1;
            
            const points = data.map((d, i) => {
              const x = (i / (data.length - 1)) * 200;
              const y = 48 - ((d - minVal) / range) * 40;
              return `${x},${y}`;
            }).join(' ');
            
            kpi.sparkline = `M ${points}`;
            
            const areaPoints = `M 0,48 L 0,${48 - ((data[0] - minVal) / range) * 40} ${points.split(' ').map(p => `L ${p}`).join(' ')} L 200,48 Z`;
            kpi.sparklineArea = areaPoints;
          });
        };

        // Animate counters
        const animateCounters = () => {
          const duration = 1500;
          const startTime = Date.now();
          
          const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 4);
            
            animatedKpis.value = [
              '$' + Math.round(kpiData.value[0].value * eased).toLocaleString(),
              Math.round(kpiData.value[1].value * eased).toLocaleString(),
              Math.round(kpiData.value[2].value * eased).toLocaleString(),
              (kpiData.value[3].value * eased).toFixed(2) + '%'
            ];
            
            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };
          
          animate();
        };

        // Revenue Chart
        const renderRevenueChart = () => {
          const container = document.getElementById('revenueChart');
          if (!container) return;
          
          container.innerHTML = '';
          
          const margin = { top: 20, right: 30, bottom: 40, left: 60 };
          const width = container.clientWidth - margin.left - margin.right;
          const height = container.clientHeight - margin.top - margin.bottom;
          
          const svg = d3.select(container)
            .append('svg')
            .attr('width', width + margin.left + margin.right)
            .attr('height', height + margin.top + margin.bottom)
            .append('g')
            .attr('transform', `translate(${margin.left},${margin.top})`);
          
          // Generate data
          const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
          const data = months.map((month, i) => ({
            month,
            revenue: Math.round(20000 + Math.sin(i * 0.8) * 8000 + Math.random() * 5000),
            costs: Math.round(12000 + Math.sin(i * 0.6) * 4000 + Math.random() * 2000)
          }));
          
          const x = d3.scaleBand()
            .domain(months)
            .range([0, width])
            .padding(0.3);
          
          const y = d3.scaleLinear()
            .domain([0, d3.max(data, d => Math.max(d.revenue, d.costs)) * 1.1])
            .range([height, 0]);
          
          // Grid lines
          svg.append('g')
            .attr('class', 'grid')
            .selectAll('line')
            .data(y.ticks(5))
            .enter()
            .append('line')
            .attr('x1', 0)
            .attr('x2', width)
            .attr('y1', d => y(d))
            .attr('y2', d => y(d))
            .attr('stroke', 'var(--border)')
            .attr('stroke-dasharray', '4,4')
            .attr('opacity', 0.5);
          
          // X Axis
          svg.append('g')
            .attr('transform', `translate(0,${height})`)
            .call(d3.axisBottom(x))
            .attr('color', 'var(--text-secondary)')
            .selectAll('text')
            .attr('fill', 'var(--text-secondary)')
            .style('font-size', '12px');
          
          // Y Axis
          svg.append('g')
            .call(d3.axisLeft(y).ticks(5).tickFormat(d => '$' + d / 1000 + 'k'))
            .attr('color', 'var(--text-secondary)')
            .selectAll('text')
            .attr('fill', 'var(--text-secondary)')
            .style('font-size', '12px');
          
          if (activeChartType.value === 'Bar') {
            // Bar Chart
            const barWidth = x.bandwidth() / 2 - 2;
            
            svg.selectAll('.revenue-bar')
              .data(data)
              .enter()
              .append('rect')
              .attr('x', d => x(d.month))
              .attr('y', height)
              .attr('width', barWidth)
              .attr('height', 0)
              .attr('fill', '#00d4aa')
              .attr('rx', 4)
              .transition()
              .duration(800)
              .delay((d, i) => i * 50)
              .attr('y', d => y(d.revenue))
              .attr('height', d => height - y(d.revenue));
            
            svg.selectAll('.costs-bar')
              .data(data)
              .enter()
              .append('rect')
              .attr('x', d => x(d.month) + barWidth + 4)
              .attr('y', height)
              .attr('width', barWidth)
              .attr('height', 0)
              .attr('fill', '#3b82f6')
              .attr('rx', 4)
              .transition()
              .duration(800)
              .delay((d, i) => i * 50 + 100)
              .attr('y', d => y(d.costs))
              .attr('height', d => height - y(d.costs));
          } else if (activeChartType.value === 'Area') {
            // Area Chart
            const area = d3.area()
              .x(d => x(d.month) + x.bandwidth() / 2)
              .y0(height)
              .y1(d => y(d.revenue))
              .curve(d3.curveMonotoneX);
            
            const gradient = svg.append('defs')
              .append('linearGradient')
              .attr('id', 'areaGradient')
              .attr('x1', '0%')
              .attr('y1', '0%')
              .attr('x2', '0%')
              .attr('y2', '100%');
            
            gradient.append('stop')
              .attr('offset', '0%')
              .attr('stop-color', '#00d4aa')
              .attr('stop-opacity', 0.4);
            
            gradient.append('stop')
              .attr('offset', '100%')
              .attr('stop-color', '#00d4aa')
              .attr('stop-opacity', 0);
            
            svg.append('path')
              .datum(data)
              .attr('fill', 'url(#areaGradient)')
              .attr('d', area)
              .attr('opacity', 0)
              .transition()
              .duration(1000)
              .attr('opacity', 1);
            
            const line = d3.line()
              .x(d => x(d.month) + x.bandwidth() / 2)
              .y(d => y(d.revenue))
              .curve(d3.curveMonotoneX);
            
            const path = svg.append('path')
              .datum(data)
              .attr('fill', 'none')
              .attr('stroke', '#00d4aa')
              .attr('stroke-width', 3)
              .attr('d', line);
            
            const totalLength = path.node().getTotalLength();
            path.attr('stroke-dasharray', totalLength + ' ' + totalLength)
              .attr('stroke-dashoffset', totalLength)
              .transition()
              .duration(1500)
              .ease(d3.easeLinear)
              .attr('stroke-dashoffset', 0);
          } else {
            // Line Chart
            const line = d3.line()
              .x(d => x(d.month) + x.bandwidth() / 2)
              .y(d => y(d.revenue))
              .curve(d3.curveMonotoneX);
            
            const line2 = d3.line()
              .x(d => x(d.month) + x.bandwidth() / 2)
              .y(d => y(d.costs))
              .curve(d3.curveMonotoneX);
            
            // Revenue line
            const path = svg.append('path')
              .datum(data)
              .attr('fill', 'none')
              .attr('stroke', '#00d4aa')
              .attr('stroke-width', 3)
              .attr('d', line);
            
            const totalLength = path.node().getTotalLength();
            path.attr('stroke-dasharray', totalLength + ' ' + totalLength)
              .attr('stroke-dashoffset', totalLength)
              .transition()
              .duration(1500)
              .ease(d3.easeLinear)
              .attr('stroke-dashoffset', 0);
            
            // Costs line
            const path2 = svg.append('path')
              .datum(data)
              .attr('fill', 'none')
              .attr('stroke', '#3b82f6')
              .attr('stroke-width', 3)
              .attr('stroke-dasharray', '6,6')
              .attr('d', line2);
            
            const totalLength2 = path2.node().getTotalLength();
            path2.attr('stroke-dashoffset', totalLength2)
              .transition()
              .duration(1500)
              .ease(d3.easeLinear)
              .attr('stroke-dashoffset', 0);
            
            // Dots
            svg.selectAll('.dot-revenue')
              .data(data)
              .enter()
              .append('circle')
              .attr('cx', d => x(d.month) + x.bandwidth() / 2)
              .attr('cy', d => y(d.revenue))
              .attr('r', 0)
              .attr('fill', '#00d4aa')
              .attr('stroke', 'var(--bg-primary)')
              .attr('stroke-width', 2)
              .transition()
              .delay(1500)
              .duration(300)
              .attr('r', 5);
            
            svg.selectAll('.dot-costs')
              .data(data)
              .enter()
              .append('circle')
              .attr('cx', d => x(d.month) + x.bandwidth() / 2)
              .attr('cy', d => y(d.costs))
              .attr('r', 0)
              .attr('fill', '#3b82f6')
              .attr('stroke', 'var(--bg-primary)')
              .attr('stroke-width', 2)
              .transition()
              .delay(1500)
              .duration(300)
              .attr('r', 4);
          }
          
          // Legend
          const legend = svg.append('g')
            .attr('transform', `translate(${width - 150}, -10)`);
          
          legend.append('circle').attr('r', 5).attr('cx', 0).attr('cy', 0).attr('fill', '#00d4aa');
          legend.append('text').attr('x', 10).attr('y', 4).text('Revenue').attr('fill', 'var(--text-secondary)').style('font-size', '12px');
          
          legend.append('circle').attr('r', 5).attr('cx', 80).attr('cy', 0).attr('fill', '#3b82f6');
          legend.append('text').attr('x', 90).attr('y', 4).text('Costs').attr('fill', 'var(--text-secondary)').style('font-size', '12px');
        };

        // Donut Chart
        const renderDonutChart = () => {
          const container = document.getElementById('donutChart');
          if (!container) return;
          
          container.innerHTML = '';
          
          const width = container.clientWidth;
          const height = container.clientHeight;
          const radius = Math.min(width, height) / 2 - 10;
          
          const svg = d3.select(container)
            .append('svg')
            .attr('width', width)
            .attr('height', height)
            .append('g')
            .attr('transform', `translate(${width / 2},${height / 2})`);
          
          const color = d3.scaleOrdinal()
            .domain(trafficSources.value.map(s => s.name))
            .range(trafficSources.value.map(s => s.color));
          
          const pie = d3.pie()
            .value(d => d.value)
            .sort(null);
          
          const arc = d3.arc()
            .innerRadius(radius * 0.6)
            .outerRadius(radius);
          
          const arcHover = d3.arc()
            .innerRadius(radius * 0.6)
            .outerRadius(radius + 10);
          
          const arcs = svg.selectAll('arc')
            .data(pie(trafficSources.value))
            .enter()
            .append('g');
          
          arcs.append('path')
            .attr('d', arc)
            .attr('fill', d => color(d.data.name))
            .attr('stroke', 'var(--bg-primary)')
            .attr('stroke-width', 2)
            .style('opacity', 0)
            .on('mouseover', function() {
              d3.select(this)
                .transition()
                .duration(200)
                .attr('d', arcHover);
            })
            .on('mouseout', function() {
              d3.select(this)
                .transition()
                .duration(200)
                .attr('d', arc);
            })
            .transition()
            .duration(800)
            .delay((d, i) => i * 100)
            .style('opacity', 1)
            .attrTween('d', function(d) {
              const interpolate = d3.interpolate({ startAngle: 0, endAngle: 0 }, d);
              return function(t) {
                return arc(interpolate(t));
              };
            });
          
          // Center text
          svg.append('text')
            .attr('text-anchor', 'middle')
            .attr('dy', '-0.5em')
            .attr('fill', 'var(--text-primary)')
            .style('font-size', '24px')
            .style('font-weight', 'bold')
            .text('100%');
          
          svg.append('text')
            .attr('text-anchor', 'middle')
            .attr('dy', '1.5em')
            .attr('fill', 'var(--text-secondary)')
            .style('font-size', '12px')
            .text('Total Traffic');
        };

        // Performance Chart
        const renderPerformanceChart = () => {
          const container = document.getElementById('performanceChart');
          if (!container) return;
          
          container.innerHTML = '';
          
          const margin = { top: 20, right: 20, bottom: 30, left: 50 };
          const width = container.clientWidth - margin.left - margin.right;
          const height = container.clientHeight - margin.top - margin.bottom;
          
          const svg = d3.select(container)
            .append('svg')
            .attr('width', width + margin.left + margin.right)
            .attr('height', height + margin.top + margin.bottom)
            .append('g')
            .attr('transform', `translate(${margin.left},${margin.top})`);
          
          // Generate time series data
          const data = Array.from({ length: 24 }, (_, i) => ({
            hour: i,
            cpu: Math.min(100, Math.max(20, 50 + Math.sin(i * 0.5) * 30 + Math.random() * 15)),
            memory: Math.min(100, Math.max(30, 60 + Math.sin(i * 0.3) * 20 + Math.random() * 10))
          }));
          
          const x = d3.scaleLinear()
            .domain([0, 23])
            .range([0, width]);
          
          const y = d3.scaleLinear()
            .domain([0, 100])
            .range([height, 0]);
          
          // Grid
          svg.append('g')
            .selectAll('line')
            .data([25, 50, 75])
            .enter()
            .append('line')
            .attr('x1', 0)
            .attr('x2', width)
            .attr('y1', d => y(d))
            .attr('y2', d => y(d))
            .attr('stroke', 'var(--border)')
            .attr('stroke-dasharray', '4,4')
            .attr('opacity', 0.5);
          
          // Axes
          svg.append('g')
            .attr('transform', `translate(0,${height})`)
            .call(d3.axisBottom(x).ticks(6).tickFormat(d => d + ':00'))
            .attr('color', 'var(--text-secondary)')
            .selectAll('text')
            .attr('fill', 'var(--text-secondary)');
          
          svg.append('g')
            .call(d3.axisLeft(y).ticks(5).tickFormat(d => d + '%'))
            .attr('color', 'var(--text-secondary)')
            .selectAll('text')
            .attr('fill', 'var(--text-secondary)');
          
          // CPU Area
          const areaCpu = d3.area()
            .x(d => x(d.hour))
            .y0(height)
            .y1(d => y(d.cpu))
            .curve(d3.curveMonotoneX);
          
          const gradientCpu = svg.append('defs')
            .append('linearGradient')
            .attr('id', 'cpuGradient')
            .attr('x1', '0%')
            .attr('y1', '0%')
            .attr('x2', '0%')
            .attr('y2', '100%');
          
          gradientCpu.append('stop').attr('offset', '0%').attr('stop-color', '#00d4aa').attr('stop-opacity', 0.3);
          gradientCpu.append('stop').attr('offset', '100%').attr('stop-color', '#00d4aa').attr('stop-opacity', 0);
          
          svg.append('path')
            .datum(data)
            .attr('fill', 'url(#cpuGradient)')
            .attr('d', areaCpu);
          
          const lineCpu = d3.line()
            .x(d => x(d.hour))
            .y(d => y(d.cpu))
            .curve(d3.curveMonotoneX);
          
          svg.append('path')
            .datum(data)
            .attr('fill', 'none')
            .attr('stroke', '#00d4aa')
            .attr('stroke-width', 2)
            .attr('d', lineCpu);
          
          // Memory Area
          const areaMem = d3.area()
            .x(d => x(d.hour))
            .y0(height)
            .y1(d => y(d.memory))
            .curve(d3.curveMonotoneX);
          
          const gradientMem = svg.append('defs')
            .append('linearGradient')
            .attr('id', 'memGradient')
            .attr('x1', '0%')
            .attr('y1', '0%')
            .attr('x2', '0%')
            .attr('y2', '100%');
          
          gradientMem.append('stop').attr('offset', '0%').attr('stop-color', '#3b82f6').attr('stop-opacity', 0.2);
          gradientMem.append('stop').attr('offset', '100%').attr('stop-color', '#3b82f6').attr('stop-opacity', 0);
          
          svg.append('path')
            .datum(data)
            .attr('fill', 'url(#memGradient)')
            .attr('d', areaMem);
          
          const lineMem = d3.line()
            .x(d => x(d.hour))
            .y(d => y(d.memory))
            .curve(d3.curveMonotoneX);
          
          svg.append('path')
            .datum(data)
            .attr('fill', 'none')
            .attr('stroke', '#3b82f6')
            .attr('stroke-width', 2)
            .attr('stroke-dasharray', '6,6')
            .attr('d', lineMem);
        };

        // Region Bars
        const renderRegionBars = () => {
          const container = document.getElementById('regionBars');
          if (!container) return;
          
          container.innerHTML = '';
          
          const margin = { top: 20, right: 30, bottom: 30, left: 100 };
          const width = container.clientWidth - margin.left - margin.right;
          const height = container.clientHeight - margin.top - margin.bottom;
          
          const svg = d3.select(container)
            .append('svg')
            .attr('width', width + margin.left + margin.right)
            .attr('height', height + margin.top + margin.bottom)
            .append('g')
            .attr('transform', `translate(${margin.left},${margin.top})`);
          
          const data = [
            { name: 'North America', value: 12400, color: '#00d4aa' },
            { name: 'Europe', value: 8700, color: '#3b82f6' },
            { name: 'Asia Pacific', value: 6200, color: '#f59e0b' },
            { name: 'South America', value: 3100, color: '#ef4444' }
          ];
          
          const x = d3.scaleLinear()
            .domain([0, d3.max(data, d => d.value)])
            .range([0, width]);
          
          const y = d3.scaleBand()
            .domain(data.map(d => d.name))
            .range([0, height])
            .padding(0.3);
          
          // Bars
          svg.selectAll('rect')
            .data(data)
            .enter()
            .append('rect')
            .attr('x', 0)
            .attr('y', d => y(d.name))
            .attr('height', y.bandwidth())
            .attr('width', 0)
            .attr('fill', d => d.color)
            .attr('rx', 4)
            .transition()
            .duration(1000)
            .delay((d, i) => i * 150)
            .attr('width', d => x(d.value));
          
          // Labels
          svg.selectAll('.label')
            .data(data)
            .enter()
            .append('text')
            .attr('x', -10)
            .attr('y', d => y(d.name) + y.bandwidth() / 2)
            .attr('dy', '0.35em')
            .attr('text-anchor', 'end')
            .attr('fill', 'var(--text-secondary)')
            .style('font-size', '12px')
            .text(d => d.name);
          
          // Values
          svg.selectAll('.value')
            .data(data)
            .enter()
            .append('text')
            .attr('x', d => x(d.value) + 10)
            .attr('y', d => y(d.name) + y.bandwidth() / 2)
            .attr('dy', '0.35em')
            .attr('fill', 'var(--text-primary)')
            .style('font-size', '12px')
            .style('font-weight', '600')
            .attr('opacity', 0)
            .text(d => d.value.toLocaleString())
            .transition()
            .delay(1000)
            .duration(300)
            .attr('opacity', 1);
        };

        // Render all charts
        const renderAllCharts = () => {
          nextTick(() => {
            renderRevenueChart();
            renderDonutChart();
            renderPerformanceChart();
            renderRegionBars();
          });
        };

        // Simulate Firebase real-time updates
        let realtimeInterval = null;
        
        const simulateRealtimeUpdate = () => {
          // Update KPI values slightly
          kpiData.value[0].value += Math.round((Math.random() - 0.5) * 500);
          kpiData.value[1].value += Math.round((Math.random() - 0.5) * 50);
          kpiData.value[2].value += Math.round((Math.random() - 0.5) * 20);
          
          // Update last updated time
          lastUpdated.value = new Date().toLocaleTimeString();
          
          // Occasionally add new activity
          if (Math.random() > 0.7) {
            const activities = [
              'New order received',
              'User signup completed',
              'Payment processed successfully',
              'Report generated',
              'API request logged'
            ];
            const action = activities[Math.floor(Math.random() * activities.length)];
            recentActivity.value.unshift({ action, time: 'Just now' });
            if (recentActivity.value.length > 5) {
              recentActivity.value.pop();
            }
          }
        };

        // Watch for chart type changes
        watch(activeChartType, () => {
          renderRevenueChart();
        });

        // Initialize
        onMounted(() => {
          generateSparkline();
          animateCounters();
          renderAllCharts();
          
          // Setup real-time simulation
          realtimeInterval = setInterval(() => {
            if (autoRefresh.value) {
              simulateRealtimeUpdate();
            }
          }, 5000);
          
          // Handle resize
          let resizeTimeout;
          window.addEventListener('resize', () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(renderAllCharts, 250);
          });
        });

        onUnmounted(() => {
          if (realtimeInterval) {
            clearInterval(realtimeInterval);
          }
        });

        return {
          theme,
          toggleTheme,
          sidebarOpen,
          currentPage,
          currentPageTitle,
          navItems,
          searchQuery,
          dateDropdown,
          dateRanges,
          dateRange,
          notifDropdown,
          notifications,
          autoRefresh,
          lastUpdated,
          chartTypes,
          activeChartType,
          kpiData,
          animatedKpis,
          trafficSources,
          topProducts,
          recentActivity,
          goals,
          regionData,
          toast,
          exportReport
        };
      }
    }).mount('#app');